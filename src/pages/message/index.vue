<template>
  <div class="message">
    <div class="prompt">*为必填项，其他为选填项。</div>
    <div class="input">
      <li class="cl brandClick">
        <div class="text fl">手表品牌*</div>
        <div class="ico fr icon-d-recovery-choice"></div>
        <div class="text2 fr">请选择</div>
      </li>
      <li class="cl">
        <div class="text fl">手表型号</div>
        <div class="text3 fr">
          <input type="text" placeholder="请输入" class="modelClick">
        </div>
      </li>
      <li class="cl">
        <div class="text fl">表径尺寸</div>
        <div class="text3 fr">
          <input type="text" placeholder="请输入" class="sizeClick">
        </div>
      </li>
      <li class="cl crowdClick">
        <div class="text fl">适用人群</div>
        <div class="ico fr icon-d-recovery-choice"></div>
        <div class="text2 fr">请选择</div>
      </li>
      <li class="cl timeClick">
        <div class="text fl">购买时间*</div>
        <div class="ico fr icon-d-recovery-choice"></div>
        <div class="text2 fr">请选择</div>
      </li>
      <li class="cl stateClick">
        <div class="text fl">使用状态*</div>
        <div class="ico fr icon-d-recovery-choice"></div>
        <div class="text2 fr">请选择</div>
      </li>
      <li class="cl repairClick">
        <div class="text fl">维修保养*</div>
        <div class="ico fr icon-d-recovery-choice"></div>
        <div class="text2 fr">请选择</div>
      </li>
    </div>

  </div>
</template>

<script>
  export default {
    data () {
      return { }
    },
    created () {
      this.load();
    },
    methods:{
      async load(){
        let list = await this.$http.home.flyGetToken();
        console.log(list);
      }
    }
  }
</script>

<style>
  .message .prompt {
    background: #ccb8a3;
    line-height: 32px;
    text-align: center;
    font-size: 12px;
    color: #fff;
  }
  .message>.input li{
    padding: 16px 0 16px 12px;
    border-bottom: .5px solid #DDDDDD;
  }
  .message>.input li:nth-child(4){
    border-bottom: 0;
  }
  .message>.input li:nth-child(5){
    border-top: 12px solid #f2f2f2;
  }
  .message>.input li:last-child{
    border-bottom: 12px solid #f2f2f2;
  }
  .message>.input .border{
    border-bottom: 0;
  }
  .message>.input li .text{
    font-size: 14px;
    color: #666666;
    line-height: 21px;
  }
  .message>.input li .text2{
    font-size: 14px;
    color: #CCCCCC;
    text-align: right;
    line-height: 21px;
    margin-right: 5px;
    width: 70%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
    .message>.input li .text3{
      width: 70%;
      margin-right: 12px;
    }
  .message>.input li .text3 input{
    border: 0;
    width: 100%;
    text-align: right;
    font-size: 14px;
    color: #333;
  }
  .message>.input li .on{
    color: #333333;
  }
  .message>.input li .ico{
    margin-right: 12px;
  }
  .message>.input li .icon-d-recovery-choice{
    display: block;
    background-image: url('//static.wbiao.co/p/share/mp/images/choice.png');
    background-size: 100%;
    width: 22px;
    height: 22px;
  }
</style>
