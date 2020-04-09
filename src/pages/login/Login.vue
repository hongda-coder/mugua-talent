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
            <div class="my-form" v-show="isSHow">
              <div class="login-way clearfix">
                <div class="pass-login active" @click="passLogin">密码登录</div>
                <div class="que-login" @click="queLogin">快捷登录</div>
              </div>
              <el-form ref="form" :model="form" class="demo-ruleForm c_talent_form">
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
                  <el-button class="btn" @click="pwdLogin('form')">登录</el-button>
                </el-form-item>
                <div class="c_talent_forget">没有账号？<a href="#" @click="goRegister">立即注册</a> </div>
                <div class="c_talent_forget" @click="addInfo">老用户</div>
              </el-form>
            </div>

            <div class="my-form" v-show="!isSHow">
              <div class="login-way clearfix">
                <div class="pass-login" @click="passLogin">密码登录</div>
                <div class="que-login active" @click="queLogin">快捷登录</div>
              </div>
              <el-form ref="queForm" :model="queForm" class="demo-ruleForm c_talent_form">
                <el-form-item  prop="loginuser" class="input-code">
                  <el-input type="text" v-model="queForm.loginuser" placeholder="请输入手机号" @keyup.enter.native="codeLogin('queForm')"></el-input>
                  <div class="no-code" v-show="isCode">手机号码未注册</div>
                  <div class="c_talent_form_iconfont"><i class="iconfont">&#xe842;</i></div>
                </el-form-item>
                <div class="form-group" style="margin-bottom: 15px;">
                  <div class="jc-component__range">
                    <div class="jc-range" :class="rangeStatus?'success':''" >
                      <i @mousedown="rangeMove" :class="rangeStatus?successIcon:startIcon"></i>
                      {{rangeStatus?successText:startText}}
                    </div>
                  </div>
                </div>

                <el-form-item  prop="code" class="input-code">
                  <el-input type="text" class="my-input" v-model="queForm.code" placeholder="请输入密码" @keyup.enter.native="codeLogin('queForm')"></el-input>
                  <button class="code" type="button" :disabled="isDisabled" 
                  @click="getCode()"> {{computeTime>0 ? `已发送(${computeTime}s)` : '获取验证码'}}</button>
                  <div class="c_talent_form_iconfont"><i class="iconfont">&#xe660;</i></div>
                </el-form-item>
                <el-form-item>
                  <el-button class="btn" @click="codeLogin('queForm')">登录</el-button>
                </el-form-item>
                <div class="c_talent_forget">没有账号？<a href="#" @click="goRegister">立即注册</a> </div>
                <div class="c_talent_forget" @click="addInfo">老用户</div>
              </el-form>
            </div>
            
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
import { oldUser, shortCode } from "@/api/serve"
import Footer from "@/components/footer/Footer"
import Pic from '@/components/common/Pic'

export default {
  name: "Login",
  data () {
    return {
      formLabelWidth: '100px',
      dialogEditVisible: false,
      form: {
        loginuser: '18977784437',
        pwd: '123456'
      },
      oldForm: {  
        TrueName: '', // 真实姓名
        othersinvitecode: '',  //邀请码
        tel: '',// 电话号码
        loginuser: '' // 密钥
      },
      queForm: {
        loginuser: '',
        code: '',
        type: 3
      },
      computeTime: 0, // 计时的时间
      isDisabled: true,  // 获取验证码是否可以点击
      isCode: false,  // 手机号未注册
      isPwd: false,   // 密码错误
      isSHow: true,   // 看去哪里登录
      isDisabled: true,
      rangeStatus: false,
     
    }
  },
  components: {
    Pic,
    Footer,
  },
  props: {
    // 成功之后的函数
    successFun: {
      type: Function
    },
    //成功图标
    successIcon: {
      type: String,
      default: 'el-icon-success'
    },
    //成功文字
    successText: {
      type: String,
      default: '验证成功'
    },
    //开始的图标
    startIcon: {
      type: String,
      default: 'el-icon-d-arrow-right'
    },
    //开始的文字
    startText: {
      type: String,
      default: '拖动滑块到最右边'
    },
    //失败之后的函数
    errorFun: {
      type: Function
    },
    //或者用值来进行监听
    status: {
      type: String
    }
  },

  methods: {

    /**密码登录 */
    pwdLogin(form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          this.$store.dispatch('LoginPassWord',{loginuser:this.form.loginuser,pwd:this.form.pwd,type:this.form.type}).then(res => {
            
              console.log(res)
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
    /**验证码登录 */
    codeLogin(queForm) {
      this.$refs[queForm].validate((valid) => {
        if (valid) {
          this.$store.dispatch('LoginCode',this.queForm).then(res => {
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

    // 跑去注册
    goRegister () {
       this.$router.push("./register")
    },

    // 发送ajax请求(向指定手机号发送验证码短信)
    getCode () {
      shortCode({tel:this.queForm.loginuser,type:this.queForm.type}).then(res => {
        if ( res.data.Message == -4 ) {
        } else if (res.data.Message == 'success') {
          this.computeTime = 60
          this.isDisabled = true
          this.queForm.type = 1
          this.intervalId = setInterval(() => {
            this.computeTime--
            if(this.computeTime<=0) {
              // 停止计时
              clearInterval(this.intervalId)
              this.isDisabled = false
            }
          }, 1000)
        }
      })
    },
    
    addInfo () {
      this.dialogEditVisible = true
    },

    saveInfo () {
      this.dialogEditVisible = false
      oldUser (this.oldForm).then( res => {
        console.log(res)
      })
    },

    passLogin () {
      this.isSHow = true
    },
    queLogin () {
      this.isSHow = false
    },

    //滑块移动
		rangeMove(e){
      if (this.queForm.loginuser == "") {
        this.isShowTel = true
        return false 
      } else {
      let ele = e.target;
			let startX = e.clientX;
			let eleWidth = ele.offsetWidth;
			let parentWidth =  ele.parentElement.offsetWidth;
			let MaxX = parentWidth - eleWidth;
      if(this.rangeStatus){//不运行
        this.isDisabled = true
				return false;
			}
			document.onmousemove = (e) => {
				let endX = e.clientX;
				this.disX = endX - startX;
				if(this.disX<=0){
					this.disX = 0;
				}
				if(this.disX>=MaxX-eleWidth){//减去滑块的宽度,体验效果更好
					this.disX = MaxX;
				}
				ele.style.transition = '.1s all';
				ele.style.transform = 'translateX('+this.disX+'px)';
				e.preventDefault();
			}
			document.onmouseup = ()=> {
				if(this.disX !== MaxX){
					ele.style.transition = '.5s all';
					ele.style.transform = 'translateX(0)';
					//执行成功的函数
					this.errorFun && this.errorFun();
				}else{
          this.isDisabled = false
					this.rangeStatus = true;
					if(this.status){
						this.$parent[this.status] = true;
					}
					//执行成功的函数
					this.successFun && this.successFun();
				}
				document.onmousemove = null;
				document.onmouseup = null;
			}
      }
    },
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
  margin-top: 42px;
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
  border-radius: 15px;
  padding: 0 20px 20px 20px;
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


.login-way {
  line-height: 50px;
  cursor: pointer;
  margin-bottom: 30px;
}

.login-way > .pass-login {
  float: left;
  width: 210px;
  text-align: center;
}

.login-way > .que-login {
  float: left;
  width: 210px;
  text-align: center;
}

.login-way > .active {
  color:#FEAD1C;
  position: relative;
}

.login-way > .active::before {
  content: '';
  display: block;
  width: 90px;
  height: 2px;
  background: #FEAD1C;
  position: absolute;
  top: 50px;
  left: 60px;
}

/deep/ .el-input {
  display: inline;
}

/deep/ .el-input__inner {
  width: 390px;
}

/deep/ .my-input > .el-input__inner {
  width: 280px;
}

.code {
  width: 92px;
  border: 1px solid #ccc;
  height: 48px;
  line-height: 48px;
  text-align: center;
  border-radius: 4px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  background: #fff;
}

.my-form {
  float: right;
  background: #fff;
  width: 420px;
  border-radius: 10px;
  /* margin-top: 25px; */
}




  /**滑块 */
.jc-range{
	background-color: #FFCCCC;
	position: relative;
	transition: 1s all;
	user-select: none;
	color: #333;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 45px; 
  border-radius: 4px;
}
.jc-range i{
	position: absolute;
	left: 0;
	width: 60px;/*no*/
	height: 100%;
	color: #919191;
	background-color: #fff;
	border: 1px solid #bbb;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
  border-radius: 4px;
}
.jc-range.success{
	background-color: #7AC23C;
	color: #fff;
}
.jc-range.success i{
	color: #7AC23C;
}
</style>