<template>
  <div>
    <div class="c_header_nav_jz">
      <div class="c_jzheaader clearfix">
        <div class="c_jzlogo">
          <img src="@/assets/images/perfect-logo.png" alt="">
        </div>
        <div class="c_talent_soon">专注人才快招！</div>
      </div>
    </div>
    <!-- banner登录区 -->
    <div class="c_talent_recommend">
      <div class="c_talent_w">
        <div class="clearfix">
          <div class="left-content">
            <div class="c_layout_left">
              <img src="@/assets/images/c-layout-left.png" alt="">
            </div>
            <div class="c_join_once"> <a href="#">立即加入</a> </div>
          </div>
          <div class="col-xs-2 col-md-2"></div>
          <div class="right-content">
            <el-form ref="form" :model="form" class="demo-ruleForm c_talent_form">
              <div class="c_talent_title">
                欢迎来到人才推荐中心！
              </div>
              <el-form-item  prop="loginuser" class="input-code">
                <el-input type="text" v-model="form.loginuser" placeholder="请输入手机号"></el-input>
                <div class="no-code" v-show="isCode">手机号码未注册</div>
                <div class="c_talent_form_iconfont"><i class="iconfont">&#xe842;</i></div>
              </el-form-item>
              <el-form-item  prop="pwd" class="input-code">
                <el-input type="password" v-model="form.pwd" placeholder="请输入密码"></el-input>
                <div class="no-code" v-show="isPwd">密码错误</div>
                <div class="c_talent_form_iconfont"><i class="iconfont">&#xe636;</i></div>
              </el-form-item>
              <el-form-item>
                <el-button class="btn" @click="submitForm('form')" @keyup.enter="loginT">登录</el-button>
              </el-form-item>
              <div class="c_talent_forget">没有账号？<a href="#" @click="goRegister">立即注册</a> </div>
            </el-form>
          </div>
        </div>
      </div>
    </div>
    <!-- banner登录区 -->
    <Pic></Pic>
    <Footer></Footer>
  </div>
</template>
<script>

import Footer from "@/components/footer/Footer"
import Pic from '@/components/common/Pic'
export default {
  name: "Login",
  data () {
    return {
      form: {
        loginuser: '',
        pwd: ''
      },
      isCode: false,
      isPwd: false,
    }
  },
  components: {
    Pic,
    Footer
  },
  methods: {
    submitForm(form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          this.$store.dispatch('Login',this.form).then(res => {
            if(res.data.Message == '-3') {
              this.isCode = true
            } else if (res.data.Message == '-4') {
              this.isPwd = true
            } else if(res.data.Message == 'ok') {
              this.$router.push({name:'editor'})
            } else if(res.data.Message == 'success') {
              this.$router.push({name:'home'})
            }
          }).catch(error=>{
            console.log(error)
          })
        } else {
          console.log('error submit!!');
          return false;
        }
      })
    },
    goRegister () {
       this.$router.push("./register")
    },
    changeCodeImg () {
      let num = Math.ceil( Math.random()*10) //生成一个随机数（防止缓存）
　　},
    // keyboardEvent () {
    //   document.onkeydown = function(e) {
    //     let ev = document.all ? window.event : e
    //     if (ev.keyCode === 13) {
    //         this.submitForm()
    //     }
    //   }
    // }
  }
}
</script>


<style scoped>
  /**2020-2-12 */
  .left-content {
    float: left;
  }

  .right-content {
    float: right;
  }

  input:focus { 
    outline: 1px solid #FEAD1C!important;
    box-shadow: 0px 0px 5px #FEAD1C;
  }
  /**2020-2-12 */

  .c_talent_w {
    width: 1200px;
    margin: auto;
}


 .c_header_nav_jz {
    width: 100%;
    background: #000;
}

.c_jzheaader {
    width: 1200px;
    margin: auto;
}

.c_jzlogo {
    width: 92px;
    float: left;
    box-sizing: border-box;
    /* height: 50px; */
    line-height: 50px;
}

.c_jzlogo img {
  width: 100%;
  vertical-align: middle;
}

.c_talent_soon {
    float: left;
    font-size: 18px;
    color: #fff;
    margin-left: 12px;
    line-height: 50px;
}

.c_talent_recommend {
    width: 100%;
    height: 500px;
    background: url("../../assets/images/c-talent-recommend-banner.png") no-repeat;
}

  .c_layout_left {
    margin-top: 80px;
}

.c_join_once a{
    display: block;
    width:  110px;
    color: #FE5C1C;
    background: #FFF;
    border-radius: 15px;
    text-align: center;
    font-size: 18px;
    line-height: 30px;
    margin-top: 60px;
}

.c_talent_form {
    width: 420px;
    margin-left: 60px;
    margin-top: 60px;
    background: #fff;
    border-radius: 15px;
    padding: 20px;
    box-sizing: border-box;
}

.c_talent_title {
    width: 100%;
    text-align: center;
    color: #FE5C1C;
    font-size: 20px;
    margin-bottom: 20px;
    line-height: 60px;
}

.c_talent_form  .form-group {
    position: relative;
}

.c_talent_form input {
  padding: 6px 6px 6px 36px;
  height: 48px;
  margin-bottom: 15px;
  display: block;
  width: 100%;
  font-size: 14px;
  color: #555;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
 
.c_talent_form .c_talent_form_iconfont {
    position: absolute;
    top: 6px;
    left: 10px;
}

.c_talent_form .c_talent_form_iconfont i {
    font-size: 22px;
    color: #FE5C1C;
}

.c_talent_hint1,.c_talent_hint2{
    display: none;
    position: absolute;
    top: 52px;
    left: 8px;
    color: red;
    font-size: 13px;
}

.c_talent_form .btn{
    display: block;
    line-height: 30px;
    padding: 6px 0;
    width: 100%;
    background: #FE5C1C;
    color: #fff;
    box-sizing: border-box;
    border: none;
    border-radius: 4px;
    letter-spacing: 2px;
    font-size: 14px;
}
.c_talent_forget a {
	color: #FEAD1C;
  font-size: 14px;
  margin-left: 15px;
}

.c_talent_forget  {
  width: 100%;
  text-align: center;
  margin-top: 10px;
  color: #999999;
  font-size: 14px;
}

  .code {
    position: absolute;
    top: 0;
    right: 0;
    width: 50px;
    border: 1px solid #ccc;
    width: 92px;
    height: 48px;
    line-height: 48px;
    text-align: center;
    border-radius: 4px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  /deep/ .el-form-item__content {
    margin-left: 0!important;
  }

  /deep/ .el-input__inner {
    height: 48px;
    line-height: 48px;
    padding: 6px 34px;
    box-sizing: border-box;
  }

  /deep/ .el-input__inner:focus {
    border-color: #FEAD1C;
  }


  .no-code {
    position: absolute;
    top: 38px;
    left: 5px;
    color:red;
  }

</style>