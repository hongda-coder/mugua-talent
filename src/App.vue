<template>
  <div id="app">
    <router-view v-if="isRouterAlive"></router-view>
  </div>
</template>

<script>



export default {
  name: 'app',
  provide () {
    return {
      reload: this.reload   
    }
  },
  data () {
    return {
      isRouterAlive: true  
    }
  }, 
  watch:{
    '$route':function(to,from){
      this.currentRouter=to.path;
    }
  },
  beforeMount(){
    this.currentRouter=this.$route.path;
  },
  methods: {
    reload () {
      this.isRouterAlive = false;            //先关闭，
      this.$nextTick(function () {
        this.isRouterAlive = true;         //再打开
      }) 
    }
  }
}
</script>

<style>
  /deep/ .el-input__inner:focus{
    border-color: #FEAD1C;
  }
  #app {
    min-height: 100vh;
  }

  ::-webkit-scrollbar {
    height: 10px!important;
    background: #fff;
  }
</style>
