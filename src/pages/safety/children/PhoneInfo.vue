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
                <input type="text"  v-model="phoneForm.phone"  disabled style="background: #fff;" class="phone" />
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
                <input type="text"  v-model="pswForm.password" disabled style="background: #fff;" class="phone" />
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
              <label>验证码</label>
              <input type="text" v-model="form.code">
              <button>获取验证码</button>
            </div>
            <div class="sure" @click="confirm">确定</div>
          </form>
        </div>
      </div>
      <!-- 修改密码 -->

      <div class="dialog" v-show="dialogPsd">
        <div class="dialogPhone">
          <div class="c-title">修改密码</div>
          <form action="">
            <div class="item">
              <label>原密码</label>
              <input type="text" v-model="pwdForm.pwd">
            </div>
            <div class="item">
              <label>新密码</label>
              <input type="text" v-model="pwdForm.xpwd">
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
import { getToken } from "@/api/cookie"
import { getTel } from "@/util"

export default {
  name: 'PhoneInfo',
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
        guid: '', //token
      },
      pwdForm: {
        pwd: '',
        xpwd: '',
        guid: '', //token
      },
      dialogPhone: false,
      dialogPsd: false,
      formLabelWidth: '80px'
    }
  },
  created () {
    this.form.guid = getToken()
    this.pwdForm.guid = getToken()
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
        console.log(res)
        this.dialogPhone = false
      })
    },

    // 确认修改密码
    confirmPwd () {
      newPwd(this.pwdForm).then( res => {
        console.log(res)
      })
    },

    // // 获取手机验证码
    // shortCode ({this.form.tel}) {

    // }
  }
}
</script>

<style scoped>

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

  .item:nth-of-type(3) input {
    width: 202px;
  }

  .item button {
    background: #FEAD1C;
    border: none;
    color: #fff;
    line-height: 38px;
    border-radius: 5px;
    margin-left: 6px;
    width: 100px;
    text-align: center;
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

</style>