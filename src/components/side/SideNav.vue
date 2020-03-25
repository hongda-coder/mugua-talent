<template>
  <div>
    <el-col>
      <el-menu style="padding: 0 15px;" background-color="#fafafa" active-text-color="#FEAD1C" :default-active="$route.path" router >
        <el-menu-item index="/home" class="item">
          <span slot="title">首页</span>
        </el-menu-item>
        <el-menu-item index="/personal" class="item">
          <span slot="title">个人信息设定</span>
        </el-menu-item>
        <el-menu-item index="/task" class="item" @click="goTask">
          <span slot="title">任务管理</span>
        </el-menu-item>
        <el-menu-item index="/recommend" @click="goRecommend" class="item">
          <span slot="title">推荐管理</span>
        </el-menu-item>
        <el-menu-item index="/group" class="item">
          <span slot="title">群组管理</span>
        </el-menu-item>
        <el-menu-item  index='/commission' class="item">
          <span slot="title">佣金管理</span>
        </el-menu-item>
        <el-menu-item index="/safety" class="item">
          <span slot="title">安全中心</span>
        </el-menu-item>
      </el-menu>
      <div class="adverte">
        <img src="../../assets/images/c-advertising.png" alt="">
      </div>
    </el-col>


  </div>
</template>

<script>
export default {
  name: 'SibeNav',
    methods: {
    // 跑去收益 
    goTask () {
      this.$store.state.checkTask = false
    },
    goRecommend () {
      this.$store.state.checkTask = false
      this.$store.state.isShow = false
    }
  }
}
</script>

<style scoped>
.item {
  border-bottom: 1px solid #ECECEC;
  text-align: center;
  position: relative;
  line-height: 65px;
  height: 65px;
}
.item span{
  font-size: 16px;
}

.is-active::before {
  position: absolute;
  top: 0;
  left: -15px;
  display: inline-block;
  content: '';
  height: 65px;
  width: 5px;
  background: #FEAD1C;
  /* border-left: 2px solid #ff5777; */
}

.adverte {
  margin-top: 20px;
}
.adverte img {
  width: 100%;
}
</style>