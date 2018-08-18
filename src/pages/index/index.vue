<template>
  <div class="container">
    <div class="button">
      <img src="/static/images/home.jpg" alt="">
    </div>
    <indexButton></indexButton>
  </div>
</template>

<script>
  import indexButton from '@/components/indexButton'
  export default {
    components: {
      indexButton
    },
    data () {
      return { }
    },
    created () {
      this.load();
    },
    methods:{
      async load(){
        console.log(this.test)
        let list = await this.$http.flyGetToken();
        console.log(list)
      }
    }
  }
</script>

<style>
  .container{
    margin-bottom: 62px;
  }
  .container img{
    width: 100%;
    display: block;
  }
  .container .button img{
    height: 786px;
  }
</style>
