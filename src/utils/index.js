/**
 * @Author: hopkinson
 * @Date:   2018-07-15T22:54:05+08:00
 * @Last modified by:   hopkinson
 * @Last modified time: 2018-08-13T13:52:25+08:00
 */
// 将数字转换成金额显示
export const toMoney = num => {
  num = num.toFixed(2)
  num = parseFloat(num)
  num = num.toLocaleString()
  return num
}
// 对象按字母升序排序
export const objKeySort = obj => {
  var newkey = Object.keys(obj).sort()
  var newObj = {}
  for (var i = 0; i < newkey.length; i++) {
    newObj[newkey[i]] = obj[newkey[i]]
  }
  return newObj
}
// 分类
export const sortOut = ($arr, key) => {
  let result = $arr.reduce((prev, item) => {
    prev[item[key]]
      ? prev[item[key]].push(item)
      : prev[item[key]] = [item]
    return prev
  }, {})
  return result
}
export const getConstByEnv = obj => {
  const isProduction = process.env.ENV === 'prod'
  return isProduction
    ? obj['production']
    : obj['test']
}
// 数组去重
export const unique = (a) => [...new Set(a)]
// 深拷贝
export const deepcopy = (source) => {
  if (!source) {
    return source
  }
  let sourceCopy = source instanceof Array
    ? []
    : {}
  for (let item in source) {
    sourceCopy[item] = typeof source[item] === 'object'
      ? deepcopy(source[item])
      : source[item]
  }
  return sourceCopy
}
/**
* add by lty
* @2018/07/11
*
* 输入时间戳，输出时间格式，参数的意义
* @param timestamp (Number) - 时间戳
* @param human (Boolean) -显示刚刚，多少分钟前，多少小时前（true显示 false不显示）
* @param time (Boolean) - 小时，分显示（true显示 false不显示）
* @param second (Boolean) -秒（true显示 false不显示）

*/
export const formatDate = (timestamp, human, time, second) => {
  if (isNaN(timestamp)) {
    return timestamp
  }
  var i = String(timestamp).length // 转化为字符串
  if (i <= 10) {
    timestamp = timestamp * 1000
    return timestamp
  }
  var _string = ''
  var now = ''
  var t = new Date()
  var d = new Date((timestamp - 60 * t.getTimezoneOffset()))
  _string = d.getFullYear() + '-' + pd(d.getMonth() + 1) + '-' + pd(d.getDate())
  now = t.getFullYear() + '-' + pd(t.getMonth() + 1) + '-' + pd(t.getDate())
  var h = d.getHours()
  var m = d.getMinutes()
  var s = d.getSeconds()
  var hNow = t.getHours()
  var mNow = t.getMinutes()
  if (human && now === _string) {
    if (h > hNow) {
      _string = '刚刚'
    } else if (h === hNow) {
      if (m >= mNow) {
        _string = '刚刚'
      } else {
        _string = (mNow - m) + '分钟前'
      }
    } else {
      _string = (hNow - h) + '小时前'
    }
  } else if (time) {
    _string += ' ' + pd(h) + ':' + pd(m) + (
      second ? ':' + pd(s) : '')
  } else {
    if (now === _string) {
      _string = pd(h) + ':' + pd(m) + (
        second ? ':' + pd(s) : '')
    }
  }
  function pd(s) {
    return s < 10
      ? '0' + s
      : s
  }

  return _string
}
