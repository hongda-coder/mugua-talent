<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>



export default {
  name: 'app',
  watch:{
    '$route':function(to,from){
      this.currentRouter=to.path;
    }
  },
  beforeMount(){
    this.currentRouter=this.$route.path;
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
</style>
