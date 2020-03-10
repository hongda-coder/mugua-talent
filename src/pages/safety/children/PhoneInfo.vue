<template>
  <div class="PhoneInfo">
    <div class="safety">安全中心</div>
    <div>
      <el-form ref="phoneForm" :model="phoneForm" class="c-form" label-width="80px">
        <div class="clearfix">
          <div class="icon"><i class="iconfont">&#xe625;</i></div>
          <div class="content-input">
            <el-form-item label="绑定手机" prop="phone">
              <el-col :span="19">
                <input type="password"  v-model="phoneForm.phone"  disabled style="background: #fff;" class="phone" />
              </el-col>
              <el-col :span="5">
                <el-button type="buttom" @click="updatePhone" class="btn">更改号码</el-button>
              </el-col>
            </el-form-item>
          </div>
        </div>
      </el-form>

      <el-form ref="pswForm" :model="pswForm" class="c-form" label-width="80px">
        <div class="clearfix">
          <div class="icon"><i class="iconfont">&#xe60a;</i></div>
          <div class="content-input">
            <el-form-item label="登录密码" prop="password">
              <el-col :span="19">
                <input type="password"  v-model="pswForm.password" disabled style="background: #fff;" class="phone" />
              </el-col>
              <el-col :span="5">
                <el-button type="buttom" @click="updatePsw" class="btn">修改密码</el-button>
              </el-col>
            </el-form-item>
          </div>
        </div>
      </el-form>


      <!-- 修改号码 -->
      <div class="dialog" v-show="dialogPhone">
        
        <div class="dialogPhone">
          <div class="c-off-pup" @click="dialogPhone = false"><img src="@/assets/images/c-off-pup.png" alt=""></div>
          <div class="c-title">更换手机号</div>
          <form action="">
            <div class="item">
              <label>原手机号</label>
              <input type="text" v-model="form.tel">
            </div>
            <div class="item">
              <label>新手机号</label>
              <input type="text" v-model="form.Xtel">
            </div>
            <div class="item">
              <label>滑动验证</label>
              <div class="jc-component__range" style="margin-left: 20px;display: inline-block;">
                <div class="jc-range" :class="rangeStatus?'success':''"  style="display: inline-block;width: 311px;">
                  <i @mousedown="rangeMove" :class="rangeStatus?successIcon:startIcon"></i>
                  {{rangeStatus?successText:startText}}
                </div>
              </div>
            </div>
            <div class="item">
              <label>验证码</label>
              <input type="text" v-model="form.code">
              <button class="code" type="button" :disabled="isDisabled" 
                @click="getCode()"> {{computeTime>0 ? `已发送(${computeTime}s)` : '获取验证码'}}</button>
            </div>
            <div class="sure" @click="confirm">确定</div>
          </form>
        </div>
      </div>

      <!-- 修改密码 -->
      <div class="dialog" v-show="dialogPsd">
        <div class="c-off-pup" @click="dialogPsd = false"><img src="@/assets/images/c-off-pup.png" alt=""></div>
        <div class="dialogPhone">
          <div class="c-off-pup" @click="dialogPsd = false"><img src="@/assets/images/c-off-pup.png" alt=""></div>
          <div class="c-title">修改密码</div>
          <form action="">
            <div class="item">
              <label>原密码</label>
              <input type="password" v-model="pwdForm.pwd">
            </div>
            <div class="item">
              <label>新密码</label>
              <input type="password" v-model="pwdForm.xpwd">
            </div>
            <div class="sure" @click="confirmPwd">确定</div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { newPhone,newPwd,shortCode } from "@/api/serve"
import { getTel, getToken } from "@/util"

import Sliding from '@/components/common/Sliding'

export default {
  name: 'PhoneInfo',
  components: {
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
      phoneForm:{ 
        phone: '451321685',
      },
      pswForm:{ 
        password: '451321685',
      },
      form: {
        tel: '',
        Xtel: '',
        code: '',
        guid: 'ssc-token', //token
      },
      pwdForm: {
        pwd: '',
        xpwd: '',
        tel: '',
        guid: 'ssc-token', //token
      },
      dialogPhone: false,
      dialogPsd: false,
      formLabelWidth: '80px',
      rangeStatus: false,
      isDisabled: true,
      computeTime: 0
    }
  },
  created () {
    this.form.guid = getToken('tel')
    this.pwdForm.guid = getToken(this.pwdForm.guid)
    this.pwdForm.tel = getTel('tel')
  },
  methods: {
    // 修改电话号码
    updatePhone () {
      this.dialogPhone = true
    },

    // 修改密码
    updatePsw () {
      this.dialogPsd = true
    },

    // 确定修改号码
    confirm () {
      console.log("68456856")
      newPhone (this.form).then( res => {
        this.dialogPhone = false
      })
    },

    getCode () {
      this.computeTime = 60
      this.isDisabled = true
      this.intervalId = setInterval(() => {
        this.computeTime--
        if(this.computeTime<=0) {
          // 停止计时
          clearInterval(this.intervalId)
          this.isDisabled = false
        }
      }, 1000)
      shortCode({guid: this.form.guid,type:this.form.type,tel:this.form.Xtel}).then(res => {
        // console.log(res)
      })
    },

    // 确认修改密码
    confirmPwd () {
      newPwd(this.pwdForm).then( res => {
        // console.log(res)
      })
    },

    //滑块移动
		rangeMove(e){
      if (this.form.tel == "" || this.form.Xtel == "") {
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

  .c-off-pup {
    position: absolute;
    top: 0;
    right: 0;
    width: 30px;
    z-index: 9999;
    opacity: .3;
  }

  .c-off-pup img {
    width: 100%;
  }

  .PhoneInfo {
    background: #fff;
    margin-top: 20px;
  }

  .safety {
    border-bottom: 1px solid #EEEEEE;
    padding-left: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .safety::before {
    display: inline-block;
    content: '';
    width: 3px;
    height: 15px;
    background: #FEAD1C;
    margin-right: 10px;
    border-radius: 15px;
  }

  .icon,.content-input {
    float: left;
  }

  .icon {
    margin-right: 10px;
    margin-top: 5px;
  }

  .icon .iconfont {
    font-size: 23px;
  }

  .c-form:first-of-type {
    width: 650px;
    margin: 20px auto;
  }

  .c-form:last-of-type {
    width: 650px;
    margin: auto;
  }
  .phone {
    color: #FEAD1C;
    font-size: 16px;
  }

  .btn {
    background: #FEAD1C;
    color: #fff;
    border: none;
    width: 140px;
    line-height: 18px;
  }


 .dialog {
   position: fixed;
   top: 0;
   left: 0;
   width: 100vw;
   height: 100vh;
   background: rgba(000,000,000,.6)
 }

  .dialogPhone {
    width: 600px;
    /* height: 300px; */
    background: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 5px;
  }

  .c-title {
    width: 100%;
    text-align: center;
    line-height: 48px;
    background: #F2F6FF;
    font-size: 18px;
    color: #959594;
    letter-spacing: 2px;
    margin-bottom: 20px;
    border-radius: 5px;
  }
  
  .item {
    width: 430px;
    margin: 10px auto;
    line-height: 42px;
  }

  .item label {
    width: 75px;
    text-align: right;
    display: inline-block;
  }

  .item input {
    border: 1px solid #ccc;
    line-height: 38px;
    border-radius: 5px;
    width: 310px;
    margin-left: 20px;
    padding: 0 15px;
    box-sizing: border-box;
  }

  .item:nth-of-type(4) input {
    width: 202px;
  }

  .item button {
    line-height: 38px;
    border-radius: 5px;
    margin-left: 6px;
    width: 100px;
    border: 1px solid #ccc;
    text-align: center;
    box-sizing: border-box;
    top: 0;
    right: 0;
    cursor: pointer;
    background: #fff;
  }

  .sure {
    width: 310px;
    background: #FEAD1C;
    color: #fff;
    text-align: center;
    line-height: 38px;
    border-radius: 5px;
    margin-left: 180px;
    margin-top: 30px;
    margin-bottom: 30px;
  }


  .item input:focus {
      border-color: #FEAD1C;
      border-radius: 5px;
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
  text-align: center;
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