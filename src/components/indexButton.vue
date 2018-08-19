<template>
  <div class="W_footer">
    <div class="bottom cl">
      <div class="but" id="statistic-evaluation">
        <a href="/pages/message/main" id="message">申请估价</a>
      </div>
      <div class="but">
        <a href="/pages/order/main" id="order">回收订单</a>
      </div>
    </div>
  </div>
</template>

<script>
  import {Domain} from '@/const'
  import {getConstByEnv} from '@/utils'
  const DomainUrl = getConstByEnv(Domain);
  export default {
    props: {
      "DomainUrl":DomainUrl
    },
    created () {
      //console.log(DomainUrl);
    },
    methods:{}
  }
</script>

<style>
.W_footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 640px;
  background-color: #fff;
  padding: 12px 0;
}
.W_footer>.bottom {
  margin: 0 2%;
  border-radius: 4px;
  height: 36px;
}
.W_footer>.bottom .but {
  width: 49%;
  float: left;
  font-size: 14px;
  text-align: center;
  line-height: 36px;
}
.W_footer>.bottom .but:nth-child(1) {
  background: #d6ba81;
  border-radius: 4px;
}
.W_footer>.bottom .but:nth-child(2) {
  border: 1px solid #ccc;
  border-radius: 4px;
  float: right;
}
.W_footer>.bottom .but a {
  display: block;
  color: #fff;
}
.W_footer>.bottom .but:last-child a {
  border-right: 0;
  color: #999;
}
</style>

