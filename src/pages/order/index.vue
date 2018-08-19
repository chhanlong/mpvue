<template>
  <div class="page">
    <div class="page__bd">
      <div class="weui-tab">
        <div class="weui-navbar">
          <block v-for="(item,index) in tabs" :key="index">
            <div :id="index" :class="{'weui-bar__item_on':activeIndex == index}" class="weui-navbar__item" @click="tabClick">
              <div class="weui-navbar__title">{{item}}</div>
            </div>
          </block>
          <div class="weui-navbar__slider" :class="navbarSliderClass"></div>
        </div>
        <div class="weui-tab__panel">
          <div class="weui-tab__content" :hidden="activeIndex != 0">
            <div class="noOrder">
              <p class="text">暂无订单</p>
              <a class="button" href="/pages/message/main">立即评估</a>
            </div>
          </div>
          <div class="weui-tab__content" :hidden="activeIndex != 1">
            <div class="noOrder">
              <p class="text">暂无订单</p>
              <a class="button" href="/pages/message/main">立即评估</a>
            </div>
          </div>
          <div class="weui-tab__content" :hidden="activeIndex != 2">
            <div class="noOrder">
              <p class="text">暂无订单</p>
              <a class="button" href="/pages/message/main">立即评估</a>
            </div>
          </div>
          <div class="weui-tab__content" :hidden="activeIndex != 3">
            <div class="noOrder">
              <p class="text">暂无订单</p>
              <a class="button" href="/pages/message/main">立即评估</a>
            </div>
          </div>
          <div class="weui-tab__content" :hidden="activeIndex != 4">
            <div class="noOrder">
              <p class="text">暂无订单</p>
              <a class="button" href="/pages/message/main">立即评估</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tabs: ["全部", "待评估", "待处理", "待收款", "我的疑问"],
        activeIndex: 0,
        fontSize: 30
      }
    },
    computed: {
      navbarSliderClass() {
        if (this.activeIndex == 0) {
          return 'weui-navbar__slider_0'
        }
        if (this.activeIndex == 1) {
          return 'weui-navbar__slider_1'
        }
        if (this.activeIndex == 2) {
          return 'weui-navbar__slider_2'
        }
        if (this.activeIndex == 3) {
          return 'weui-navbar__slider_3'
        }
        if (this.activeIndex == 4) {
          return 'weui-navbar__slider_4'
        }
      }
    },
    methods: {
      tabClick(e) {
        this.activeIndex = e.currentTarget.id;
      }
    }
  }
</script>


<style>
  page {
    background-color: #ffffff;
  }
  .page__bd {
    padding-bottom: 0;
  }
  .weui-navbar__slider_0 {
    left: 43rpx;
    transform: translateX(0);
  }
  .weui-navbar__slider_1 {
    left: 44rpx;
    transform: translateX(150rpx);
  }
  .weui-navbar__slider_2 {
    left:45rpx;
    transform: translateX(300rpx);
  }
  .weui-navbar__slider_3 {
    left:14rpx;
    transform: translateX(480rpx);
  }
  .weui-navbar__slider_4 {
    left:49rpx;
    transform: translateX(600rpx);
  }
  .weui-navbar__item{
    padding: 16rpx 0;
  }
  .weui-navbar{
    border-bottom:0;
  }
  .weui-navbar__item.weui-bar__item_on{
    color: #333;
  }
  .weui-navbar__slider{
    height: 4rpx;
    width: 2em;
    background-color: #333;
  }
  .weui-navbar__title{
    font-size: 14px;
  }
  .noOrder{
    margin-top: 103px;
  }
  .noOrder>.text {
    font-size: 14px;
    color: #999;
    line-height: 14px;
    text-align: center;
    margin-bottom: 20px;
  }
  .noOrder>.button {
    border: 1px solid #d6ba81;
    border-radius: 4px;
    width: 98px;
    height: 34px;
    margin: 0 auto;
    font-size: 14px;
    color: #d6ba81;
    line-height: 34px;
    text-align: center;
    display: block;
  }

</style>
