<template>
  <div id="app">
    <Header />
    <section style="min-width: 760px;margin-left: 0;margin-right: 0;">
      <el-row :gutter="10">
        <el-col :xs="3" :sm="3" :md="3" :lg="3" :xl="3" style="padding-left: 0;margin-top: 20px; ">
          <div class="grid-content bg-purple-dark">
            <SideNav />
          </div>
        </el-col>
        <el-col :xs="21" :sm="21" :md="21" :lg="21" :xl="21">
          <div>
            <Main></Main>
          </div>
        </el-col>
      </el-row>
      
    </section>
    <Footer style="margin-top: 20px;"></Footer>
  </div>
</template>

<script>

import Header from  "./header/Header"
import SideNav from "./side/SideNav"
import Footer from "./footer/Footer"
import Main from "./main/Main"

export default {
  name: 'app',
  components: {
    Header,
    SideNav,
    Main,
    Footer
  }
}
</script>

<style>
      /deep/ .el-input__inner:focus{
      border-color: #FEAD1C;
    }
</style>
