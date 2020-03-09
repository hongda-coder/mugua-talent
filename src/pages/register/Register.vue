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
            <form class="c_talent_form">
              <div class="c_talent_title">
                欢迎来到人才推荐中心！
              </div>
              <div class="form-group">
                <input type="text" placeholder="请输入账号" v-model="form.tel">
                <div class="c_talent_form_iconfont"><i class="iconfont">&#xe842;</i></div>
                <div class="c_talent_hint1">请输入账号</div>
              </div>
              <div class="form-group">
                <input type="password" placeholder="请输入密码" v-model="form.pwd">
                <div class="c_talent_form_iconfont"><i class="iconfont">&#xe636;</i></div>
                <div class="c_talent_hint2">请输入密码</div>
              </div>

              <div class="form-group" style="margin-bottom: 15px;">
                  <div class="jc-component__range">
                    <div class="jc-range" :class="rangeStatus?'success':''" >
                      <i @mousedown="rangeMove" :class="rangeStatus?successIcon:startIcon"></i>
                      {{rangeStatus?successText:startText}}
                    </div>
                  </div>
                <!-- <input type="text" placeholder="请输入图形验证码"  style="width: 280px;" v-model="form.check"> 
                <div class="code">
                  <img src="http://192.168.0.182/api/user/GenerateCheckCode" alt="captcha" @click="getCaptcha" ref="captcha"> 
                </div>
                <div class="c_talent_form_iconfont"><i class="iconfont">&#xe60d;</i></div> -->
              </div>

              <div class="form-group">
                <input type="text" placeholder="请输入手机验证码"  style="width: 280px;" v-model="form.code">
                <button class="code" type="button" :disabled="isDisabled" 
                @click="getCode()"> {{computeTime>0 ? `已发送(${computeTime}s)` : '获取验证码'}}</button>
                <div class="c_talent_form_iconfont"><i class="iconfont">&#xe660;</i></div>
              </div>
              <button type="button" class="btn" @click="registerBtn">免费注册</button>
              <div class="c_talent_forget">已有账号？<a href="#" @click="goLogin">立即登录</a> </div>
            </form>
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
import { register,shortCode } from "@/api/serve"

import Footer from "@/components/footer/Footer"
import Pic from '@/components/common/Pic'

import Sliding from './children/Sliding'
export default {
  name: "Register",
  components: {
    Pic,
    Footer,
    Sliding
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
  data () {
    return {
      form: {
        tel: '',
        pwd: '',
        code: '',
        guid: 0,
        type:1
      },
      computeTime: 0, // 计时的时间
      isDisabled: true,
      disX : 0,
			rangeStatus: false
    }
  },
  methods: {

    // 发送ajax请求(向指定手机号发送验证码短信)
    getCode () {
      this.computeTime = 5
      this.isDisabled = true
      this.intervalId = setInterval(() => {
        this.computeTime--
        if(this.computeTime<=0) {
          // 停止计时
          clearInterval(this.intervalId)
          this.isDisabled = false
        }
      }, 1000)
      shortCode({guid: this.form.guid,type:this.form.type,tel:this.form.tel}).then(res => {
        // console.log(res)
      })
    },
    goLogin () {
      this.$router.push("./login")
    },

    // 注册
    registerBtn () {
      register ({tel:this.form.tel,pwd:this.form.pwd,code:this.form.code}).then( res=> {
        if (res.data.Message == 'success') {
          this.$router.push("./login")
        }
      })
    },
    //滑块移动
		rangeMove(e){
      if (this.form.tel == "" || this.form.pwd == "") {
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
}

.c_talent_form  .form-group {
    position: relative;
}

.c_talent_form input {
  padding: 6px 6px 6px 36px;
  height: 48px;
  margin-bottom: 15px;
  display: inline-block;
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
    top: 12px;
    left: 7px;
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

/**2020 2 13 */
.code {
  width: 92px;
  border: 1px solid #ccc;
  height: 48px;
  line-height: 48px;
  text-align: center;
  border-radius: 4px;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  background: #fff;
}
.code img {
  width: 100%;
}
.right_phone {
  color: #333;
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