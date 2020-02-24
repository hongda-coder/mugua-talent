<template>
<div>
    <header class="c-header">
    <div class="c-header-content clearfix">
      <div class="c-header-logo">
        <img src="../../assets/images/c-logo.png" alt="">
      </div>
      <div class="c-login clearfix">
        <div class="c-avatar">
          <img src="../../assets/images/c-avatar.png" alt="">
        </div>
        <div class="c-user">
          <span>cqcdwlbsm </span>|<span style="cursor: pointer;">退出</span>
        </div>
      </div>
    </div>
  </header>
  <div class="c-bannner">
    <img src="../../assets/images/c-bannner.png" alt="">
  </div>
</div>

</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
.c-header {
  width: 100%;
  padding: 0 50px;
  background: #fff;
  box-sizing: border-box;
}
.c-header-content .c-header-logo {
  float: left;
  width: 100px;
  display: block;
  line-height: 50px;
}
.c-header-content .c-header-logo img {
  width: 100%;
  vertical-align: middle;
}

.c-header-content .c-login {
  float: right;
  height: 50px;
  display: block;
  line-height: 50px;
}

.c-login .c-avatar {
  float: left;
  width: 30px;
  display: block;
}

.c-login .c-avatar img {
  width: 100%;
  vertical-align: middle;
}
.c-login .c-user  {
  float: left;
  color: #959595;
}
.c-login .c-user span{
  margin: 0 10px;
  font-size: 13px;
}

.c-bannner {
  margin-top: 10px;
  width: 100%;
}

.c-bannner  img {
  width: 100%;
}
</style>