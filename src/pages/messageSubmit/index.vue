<template>
  <div class="submit">
    <div class="ico confirm"></div>
    <div class="text">
      <p class="p1">申请估价已提交</p>
      <p class="p2">平台正在极速审核中，请稍后查看</p>
    </div>
    <div class="content">
      <div class="top cl">
        <div class="left fl"><img src="//static.wbiao.co/p/share/mp/images/code.jpg" alt=""></div>
        <div class="right fl">
          <p class="p1">了解更多报价疑问解答</p>
          <p class="p2">截屏后微信识别二维码</p>
          <p class="p3">或微信添加wbiao081</p>
        </div>
      </div>
      <div class="bottom">
        添加后发送注册会员手机号+咨询问题,我们将会在工作时间内(周一至周五9:00-18:00)尽快核实并答复。
      </div>
    </div>
    <div class="button cl">
      <a class="button-a fl" href="/pages/index/main" >返回首页</a>
      <a class="button-b fr" href="/pages/order/main">查看详情</a>
    </div>
  </div>
</template>

<script>
  import '../../../static/css/message.css'
  export default {
    data () {
      return { }
    },
    created () {},
    methods:{}
  }
</script>

<style>
  .submit{
    padding-top: 44px;
  }
  .submit .ico{
    margin: 0 auto;
  }
  .submit .confirm{
    display: block;
    background-image: url('//static.wbiao.co/p/share/mp/images/confirm.png');
    background-size: 100%;
    width: 50px;
    height: 50px;
  }
  .submit .text{
    margin-top: 20px;
  }
  .submit .text .p1{
    font-size: 16px;
    color: #444444;
    text-align: center;
    line-height: 18px;
  }
  .submit .text .p2{
    font-size: 12px;
    color: #999999;
    text-align: center;
    line-height: 18px;
    margin-top: 6px;
  }
  .submit .content{
    margin: 68px 16px 0 16px;
    background: #FFFFFF;
    box-shadow: 0 5px 20px 0 rgba(0,0,0,0.10);
    border-radius: 10px;
    padding: 34px 16px;
  }
  .submit .content .top .left{
    width: 80px;
    margin-left: 8px;
  }
  .submit .content .top .left img{
    width: 205rpx;
    height: 191rpx;
  }
  .submit .content .top .right{
    margin-left: 25px;
  }
  .submit .content .top .right .p1{
    font-size: 18px;
    color: #333333;
    text-align: center;
    line-height: 18px;
    font-weight: bold;
  }

  .submit .content .top .right .p2{
    font-size: 14px;
    color: #666666;
    line-height: 14px;
    margin-top: 13px;
  }
  .submit .content .top .right .p3{
    font-size: 14px;
    color: #666666;
    line-height: 14px;
    margin-top: 13px;
  }

  .submit .content .bottom{
    margin-top: 12px;
    padding-top: 12px;
    border-top: 1px solid #e6e6e6;
    font-size: 12px;
    color: #999999;
    line-height: 18px;
  }

  .submit .button{
    width: 92%;
    margin: 60px auto 0 auto;
    padding: 12px 0;
  }
  .submit .button a{
    width: 48%;
    border: 1px solid #CCCCCC;
    border-radius: 2px;
    height: 34px;
    display: block;
    font-size: 14px;
    color: #666666;
    text-align: center;
    line-height: 34px;
    font-weight: bold;
  }
  .submit .button .button-b{
    background-color:#CCAA7A;
    border: 0;
    height: 36px;
    line-height: 36px;
    color: #fff;
  }
</style>
