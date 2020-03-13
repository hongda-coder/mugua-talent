<template>
  <div>
    <div style="background: #fff; margin-top: 20px;">
      <div class="c-people-title clearfix">
        <div class="c-info-name">我的收益  > 提现</div>
      </div>

      <div style="padding: 20px 40px;">
        <div class="get-money">可提现金额（元）：<span class="money-count">{{canGetMoney}}</span></div>
        <div class="get-money">提现金额（元）</div>
        <div class="clearfix can-money">
          <div class="most-money">单次提现金额不能低于100元，预计1-2个工作日到账，免手续费。</div>
          <div class="all-money" @click="allMoney">全部提现</div>
        </div>
        <div class="input-count">
          <input type="text" placeholder="请输入提现金额" v-model="form.money" autocomplete="new-password">
        </div>
        <div class="title-bank">提现至以下银行卡</div>
        <div class="bank-card clearfix">
          <div class="bank-img"><img src="@/assets/images/c-bank-img.png" alt=""></div>
          <div class="bank-type">
            <div>{{bankForm.branch}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;储蓄卡</div>
            <div>
              <span class="c-omit-count"><img src="@/assets/images/c-omit-count.png" alt=""></span>
              <span class="c-omit-count"><img src="@/assets/images/c-omit-count.png" alt=""></span>
              <span class="c-omit-count"><img src="@/assets/images/c-omit-count.png" alt=""></span>
              <span>{{bankForm.bank}}</span>
              </div>
          </div>
        </div>
        <div class="clearfix" style="width: 600px;">
          <div class="most-money" style="font-size: 18px;color: #333;"> 请输入提现密码</div>
          <div class="all-money">忘记密码？</div>
        </div>
        <div class="with-password">
          <input type="password" placeholder="请输入提现密码" v-model="form.pwd" autocomplete="new-password">
          <div class="hint" style="color:red;line-height: 30px;" v-show="isPwd">请输入正确提现密码</div>
        </div>

        <div class="comfire" @click="comfirmMoney">确认提现</div>
      </div>
    </div>

    <el-dialog
      title="确定提现"
      :visible.sync="dialogMyMoney"
      width="30%"
      center
      >
      <div style="text-align: center;font-size: 16px;">确定提现 <span style="font-size: 18px; color: red; font-weight: 600;"> {{form.money}}元</span></div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogMyMoney = false">取 消</el-button>
        <el-button type="primary" @click="comfirmGet">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import { earningsManage,withdrawMoney, bankInfo } from "@/api/serve"
import { getTel,getToken } from "@/util"
export default {
  name: 'Withdraw',
  data () {
    return {
      form: {
        money: '', //提现金额
        pwd: '' // 提现密码
      },
      canGetMoney: '', // 可提现
      lists: {
        guid: 'ssc-token',
        tel: 'tel'
      },
      bankForm:{
        branch: '',
        bank: ''
      },
      dialogMyMoney: false, // 提现提示
      isPwd: false  // 是否显示提示
    }
  },
  mounted() {
    this.lists.guid = getToken(this.lists.guid)
    this.lists.tel = getTel(this.lists.tel)

    // 可提现
    this.haveMoney()

    this.bankInfo()
  },
  methods: {
    //提现
    comfirmMoney () {
      this.dialogMyMoney = true
    },

    bankInfo () {
      bankInfo ({guid:this.lists.guid,tel:this.lists.tel}).then( res => {
        console.log(res)
        this.bankForm = res.data.data
      }) 
    },

    // 确认提现
    comfirmGet () {
      withdrawMoney({guid:this.lists.guid, tel:this.lists.tel, money:this.form.money,pwd:this.form.pwd }).then( res => {
        console.log(res)
        if (res.data.Message == 'success') {
          this.dialogMyMoney = false
          this.isPwd = false
          this.haveMoney()
          this.$router.push('/commission')
        } 
        if (res.data.Message == '-1') {
          this.dialogMyMoney = false
          this.isPwd = true
        }

      })
    },
    // 全部提现
    allMoney () {
      earningsManage (this.lists).then( res => {
        this.form.money = res.data.data.cumulativewithdraw
      })
    },

    // 可提现
    haveMoney () {
      earningsManage (this.lists).then( res => {
        this.canGetMoney = res.data.data.cumulativewithdraw
      })
    },     
  }
}
</script>

<style scoped>

  .c-people-title {
    border-bottom: 1px solid #EEEEEE;
    background: #fff;
  }

  .c-info-name {
    float: left;
    line-height: 46px;
    font-size: 17px;
    margin-left: 10px;
    color: #959595;
    
  }

  .get-money {
    font-size: 16px;
    color: #333;
    line-height: 30px;
  }

  .money-count {
    color: #FF0101;
    font-weight: 800;
  }

  .can-money {
    width: 600px;
  }

  .most-money {
    float: left;
    color: #959595;
    font-size: 14px;
  }

  .all-money {
    float: right;
    color: #FBAD17;
    font-size: 14px;
    cursor: pointer;
  }

  .input-count input {
    width: 600px;
    padding: 5px 20px;
    box-sizing: border-box;
    border-radius: 4px;
    color: #333;
    border: 1px solid #959595;
    margin: 15px 0;
  }

  .input-count input:focus{
    border-color: #FEAD1C!important;
    border-radius: 4px;
  }

  .bank-card {
    width: 316px;
    height: 68px;
    border-radius: 4px;
    padding: 5px 20px;
    box-sizing: border-box;
    margin-bottom: 12px;
    background: url("../../assets/images/c-bank-bg.png") no-repeat;
    background-size: 100% 100%;
  }

  .c-omit-count {
    display: inline-block;
    width: 30px;
    margin-right: 5px;
  }
  .c-omit-count img {
    width: 100%;
  }

  .bank-img {
    float: left;
    line-height: 70px;
    margin-right: 20px;
  }

  .bank-type{
    float: left;
    padding: 8px 0;
    line-height: 20px;
    box-sizing: border-box;
    color: #fff;
  }

  .title-bank {
    line-height: 36px;
  }

  .with-password {
    position: relative;
  }

  .hint {
    position: absolute;
    top: 40px;
    left: 10px;
    font-size: 13px;
  }

  .with-password input{
    width: 600px;
    padding: 5px 20px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border-radius: 4px;
    color: #333;
    border: 1px solid #959595;
    margin: 15px 0
  }

  .comfire {
    width: 310px;
    text-align: center;
    height: 45px;
    margin-top: 10px;
    line-height: 45px;
    color: #fff;
    background: #FEAD1C;
    border-radius: 4px;
  }
</style>