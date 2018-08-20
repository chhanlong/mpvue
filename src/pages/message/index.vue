<template>
  <div class="message">
    <div class="prompt">*为必填项，其他为选填项。</div>
    <div class="img">
      <div class="ico photo"></div>
      <div class="text">添加照片*</div>
    </div>
    <!-------------有图片-------------->
    <div class="imgPick cl h">
      <div class="left fl">
        <img src="//wbiao-test.oss-cn-hangzhou.aliyuncs.com/aftersale/4AMjWTZW6HtnkMid3FiMpnd3Dt4NP4HQ.png" alt="">
        <img src="//wbiao-test.oss-cn-hangzhou.aliyuncs.com/aftersale/4AMjWTZW6HtnkMid3FiMpnd3Dt4NP4HQ.png" alt="">
        <img src="//wbiao-test.oss-cn-hangzhou.aliyuncs.com/aftersale/4AMjWTZW6HtnkMid3FiMpnd3Dt4NP4HQ.png" alt="">
        <img src="//wbiao-test.oss-cn-hangzhou.aliyuncs.com/aftersale/4AMjWTZW6HtnkMid3FiMpnd3Dt4NP4HQ.png" alt="">
        <img src="//wbiao-test.oss-cn-hangzhou.aliyuncs.com/aftersale/4AMjWTZW6HtnkMid3FiMpnd3Dt4NP4HQ.png" alt="">
        <img src="//wbiao-test.oss-cn-hangzhou.aliyuncs.com/aftersale/4AMjWTZW6HtnkMid3FiMpnd3Dt4NP4HQ.png" alt="">
      </div>
      <div class="right fr">共6张</div>
    </div>

    <div class="input">
      <li class="cl brandClick">
        <div class="text fl">手表品牌*</div>
        <div class="ico fr icon-d-recovery-choice"></div>
        <div class="text2 fr">请选择</div>
      </li>
      <li class="cl">
        <div class="text fl">手表型号</div>
        <div class="text3 fr">
          <input type="text" placeholder-class="placeholder" placeholder="请输入" class="modelClick">
        </div>
      </li>
      <li class="cl">
        <div class="text fl">表径尺寸</div>
        <div class="text3 fr">
          <input type="text" placeholder-class="placeholder" placeholder="请输入" class="sizeClick">
        </div>
      </li>
      <picker @change="PickerCrowd" :value="indexCrowd" :range="arrayCrowd">
        <li class="cl">
          <div class="text fl">适用人群</div>
          <div class="ico fr icon-d-recovery-choice"></div>
          <div class="text2 fr">请选择</div>
        </li>
      </picker>
      <picker mode="date" :value="dateTime" start="1999-01-01" end="2099-01-01" @change="DateTime">
        <li class="cl timeClick">
          <div class="text fl">购买时间*</div>
          <div class="ico fr icon-d-recovery-choice"></div>
          <div class="text2 fr">请选择</div>
        </li>
      </picker>
      <picker @change="PickerState" :value="indexState" :range="arrayState">
        <li class="cl">
          <div class="text fl">使用状态*</div>
          <div class="ico fr icon-d-recovery-choice"></div>
          <div class="text2 fr">请选择</div>
        </li>
      </picker>
      <picker @change="PickerRepair" :value="indexRepair" :range="arrayRepair">
        <li class="cl">
          <div class="text fl">维修保养*</div>
          <div class="ico fr icon-d-recovery-choice"></div>
          <div class="text2 fr">请选择</div>
        </li>
      </picker>
    </div>

    <div class="inputText">
      <div class="describe">功能状态（无异常可不填）</div>
      <textarea class="js_area" maxlength="300" placeholder-class="placeholder" placeholder="请描述手表存在的功能问题或其他关键信息，如......、劳力士表款表盘6点位置暗藏或保卡显示的字头信息等"></textarea>
      <div class="text"><span class="js_text">0</span>/300</div>
    </div>

    <!--  估价说明 -->
    <div class="explain">
      <p class="p1">估价说明</p>
      <p class="p2">1. 奢品闲置回收平台所提供的估价均由优质二手商家、典当行等商家提供，万表不参与估价。<br>
        2. 绝大部分手表的主要价值在于佩戴使用，而闲置回收侧重于它的流通价值，所以会出现部分手表回收估价较低甚至没有报价的情况，如时装品牌表款，石英表，小众特殊功能表等。<br>
        3. 二手表的回收估价一般是其市场价的20%~60%，视乎其品牌、外观成色、配件、机芯状态、流通价值等因素影响。</p>
    </div>

    <div class="agreement">点击申请估价意味您已同意<span id="clause">《万表平台回收服务条款》</span></div>
    <div class="button submitClick">申请估价</div>
  </div>
</template>

<script>
  import '../../../static/css/message.css'
  export default {
    data() {
      return {
        indexCrowd:1,
        arrayCrowd: ['男表', '女表', '中性'],
        indexState:1,
        arrayState:['已使用', '未使用'],
        indexRepair:1,
        arrayRepair:['有维修保养', '无'],
        dateTime: '2016-09-01',
      }
    },
    methods: {
      PickerCrowd(e) {
        console.log('选中的值为：' + this.arrayCrowd[e.mp.detail.value]);
        console.log(e.mp.detail.value);
      },
      PickerState(e) {
        console.log('选中的值为：' + this.arrayState[e.mp.detail.value]);
        console.log(e.mp.detail.value);
      },
      PickerRepair(e) {
        console.log('选中的值为：' + this.arrayRepair[e.mp.detail.value]);
        console.log(e.mp.detail.value);
      },
      DateTime(e) {
        console.log('选中的日期为：' + e.mp.detail.value);
      },
    }
  }
</script>

