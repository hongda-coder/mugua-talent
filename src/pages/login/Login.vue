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
                <el-input type="text" v-model="form.loginuser" placeholder="请输入手机号" @keyup.enter.native="submitForm('form')"></el-input>
                <div class="no-code" v-show="isCode">手机号码未注册</div>
                <div class="c_talent_form_iconfont"><i class="iconfont">&#xe842;</i></div>
              </el-form-item>
              <el-form-item  prop="pwd" class="input-code">
                <el-input type="password" v-model="form.pwd" placeholder="请输入密码" @keyup.enter.native="submitForm('form')"></el-input>
                <div class="no-code" v-show="isPwd">密码错误</div>
                <div class="c_talent_form_iconfont"><i class="iconfont">&#xe636;</i></div>
              </el-form-item>
              <el-form-item>
                <el-button class="btn" @click="submitForm('form')">登录</el-button>
              </el-form-item>
              <div class="c_talent_forget">没有账号？<a href="#" @click="goRegister">立即注册</a> </div>
              <div class="c_talent_forget" @click="addInfo">老用户</div>
            </el-form>
          </div>
        </div>
      </div>
    </div>

    <el-dialog title="管理员修改" :visible.sync="dialogEditVisible" width="600px" center>
      <el-form :model="oldForm">
        <el-form-item label="真实姓名" :label-width="formLabelWidth">
          <el-input v-model="oldForm.TrueName" autocomplete="off" placeholder="请输入真实姓名" onKeypress="return(/^[\u0391-\uFFE5A-Za-z]+$/.test(String.fromCharCode(event.keyCode)))"></el-input>
        </el-form-item>
        <el-form-item label="上级分销码" :label-width="formLabelWidth">
          <el-input v-model="oldForm.othersinvitecode" autocomplete="off" placeholder="请输入上级分销码" onkeyup="value=value.replace(/[^\d]/g,'')" ></el-input>
        </el-form-item>
        <el-form-item label="电话号码" :label-width="formLabelWidth">
          <el-input v-model="oldForm.tel" autocomplete="off" placeholder="请输入电话号码" onkeyup="value=value.replace(/[^\d]/g,'')" ></el-input>
        </el-form-item>
        <el-form-item label="密钥" :label-width="formLabelWidth">
          <el-input type="password" v-model="oldForm.loginuser" autocomplete="off" placeholder="请输入密钥"></el-input>
        </el-form-item>

        <div style="width: 389px;margin-left: 100px;">
          <el-button style="background: #FEAD1C; color: #fff;width: 100%; line-height: 24px;  border: none;" @click="saveInfo">保存</el-button>
        </div>
      </el-form>
    </el-dialog>

    <!-- banner登录区 -->

    <Pic></Pic>
    <Footer></Footer>
  </div>
</template>


<script>
import { oldUser } from "@/api/serve"
import Footer from "@/components/footer/Footer"
import Pic from '@/components/common/Pic'
export default {
  name: "Login",
  data () {
    return {
      formLabelWidth: '100px',
      dialogEditVisible: false,
      form: {
        loginuser: '',
        pwd: ''
      },
      oldForm: {  
        TrueName: '', // 真实姓名
        othersinvitecode: '',  //邀请码
        tel: '',// 电话号码
        loginuser: '' // 密钥
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
    addInfo () {
      this.dialogEditVisible = true
    },
    saveInfo () {
      this.dialogEditVisible = false
      oldUser (this.oldForm).then( res => {
        console.log(res)
      })
    }
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
  cursor: pointer;
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

  /deep/ .el-input {
    display: inline;
  }

  /deep/ .el-input__inner {
    width: 390px;
  }

</style>