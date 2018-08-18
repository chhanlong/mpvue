/**
 * @Author: hopkinson
 * @Date:   2018-08-03T14:17:20+08:00
 * @Last modified by:   hopkinson
 * @Last modified time: 2018-08-13T10:58:15+08:00
 */
import {SecretKey} from '@/const'
import qs from 'qs'
import {objKeySort} from '@/utils'
import MD5 from '@/utils/md5'
const unixDate = Math.floor(Date.now() / 1000)
const isProduction = process.env.ENV === 'prod'
let secret = isProduction
  ? SecretKey.production
  : SecretKey.test
export default function (request, {
  signHeader = false
} = {}) {
  request.headers['content-type'] = 'application/json;charset=UTF-8'
  // 公共参数
  let commonData = {
    time: unixDate, // 时间戳
    rcode: Math.floor(Math.random() * 9999) // 随机4位数
  }
  let needToken = request.needToken
    ? {
      'wb-token': request.headers['wb-token'] || wx.getStorageSync('tokenID')
    }
    : {}
  /**
   * [post - 验签]
   * 1. commonData 里加入json.parse后的body参数，并且qs.stringify(不encode)
   * 2. 对象升序排列，然后 MD5操作
   * 3. 在url上拼接 body,time,sign
   */
  if (request.method.toUpperCase() === 'POST') {
    let sortObject = Object.assign({}, commonData, needToken, {
      body: JSON.stringify(request.body)
    })
    let signObject = objKeySort(sortObject)
    let signParams = `${qs.stringify(signObject, {encode: false})}${secret}`
    console.log('post', signParams)
    commonData.sign = MD5(signParams)
    request.url = request.url + '?' + qs.stringify(commonData)
  }
  /**
   * [get - 验签]
   * 1. 对象升序排列，然后 MD5操作
   * 2. 在url上拼接 body,time,sign
   * 3. signHeader为真意味着header验签，header加入SignDate，Content-MD5，Version
   */
  if (request.method.toUpperCase() === 'GET') {
    let sortObject = Object.assign({}, commonData, needToken, request.body)
    let signObject = objKeySort(sortObject)
    let signParams = `${qs.stringify(signObject, {encode: false})}${secret}`
    commonData.sign = MD5(signParams)
    request.body = objKeySort({...request.body, ...commonData})
  }
}
