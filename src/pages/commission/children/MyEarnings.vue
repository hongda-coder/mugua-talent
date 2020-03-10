<template>
  <div class="myearnings">
    <div class="wrap clearfix">
      <el-row :gutter="10" class="earnings-info clearfix" style="">
        <el-col style="float: left; width: calc(70% - 50px);padding: 0;">
          <el-row :gutter="10">
            <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">
              <div class="item">
                <div class="earnings">月提现</div>
                <div class="account">
                  <div class="money">
                  ￥{{monye.Monthstatistics}}<span style="margin-left: 20px;"><img src="@/assets/images/c-coin-count.png" alt=""></span>
                  </div>
                </div>
              </div>
            </el-col>
            <el-col :xs="6" :sm="6" :md="6"  :lg="6" :xl="6">
              <div class="item">
                <div class="earnings">总收益</div>
                <div class="account">
                  <div class="money">
                  ￥{{monye.revenuestatistics}}<span style="margin-left: 20px;"><img src="@/assets/images/c-coin-count.png" alt=""></span>
                  </div>
                </div>
              </div>
            </el-col>
            <el-col :xs="6" :sm="6" :md="6" :xl="6">
              <div class="item">
                <div class="earnings">可提现</div>
                <div class="account">
                  <div class="money">
                  ￥{{monye.cumulativewithdraw}}<span style="margin-left: 20px;"><img src="@/assets/images/c-coin-count.png" alt=""></span>
                  </div>
                </div>
              </div>
            </el-col>
            <el-col :xs="6" :sm="6" :md="6" :xl="6">
              <div class="item">
                <div class="earnings">已提现</div>
                <div class="account">
                  <div class="money">
                  ￥{{monye.withdraw}}<span style="margin-left: 20px;"><img src="@/assets/images/c-coin-count.png" alt=""></span>
                  </div>
                </div>
              </div>
            </el-col>
          </el-row>
        </el-col>
        <div class="withdraw"> <button @click="getMoney">提现</button> </div>
      </el-row>
    </div>
        <!-- 提现 -->
    <!-- <el-dialog
      title="提现金额"
      :visible.sync="dialogMoney"
      width="30%"
      center
     >
      <el-form  label-width="80px" :model="form">
        <el-form-item label="提现金额" prop="much">
          <el-input v-model="form.much"></el-input>
        </el-form-item>
        <el-form-item label="提现密码" prop="much">
          <el-input tyep="password" v-model="form.pwd"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogMoney = false">取 消</el-button>
        <el-button type="primary" @click="comfirmMoney">确 定</el-button>
      </span>
    </el-dialog> -->
  </div>
</template>

<script>

import { earningsManage} from "@/api/serve"
// import { getToken } from "@/api/cookie"
import { getTel,getToken } from "@/util"

export default {
  name: 'MyEarnings',
  data () {
    return {
      lists: {
        guid: 'ssc-token',
        tel: 'tel'
      },
      monye: {
        revenuestatistics: '', //总收益
        cumulativewithdraw: '', //可提现
        Monthstatistics: '',  //月提现
        withdraw: '', // 已提现
      },
      dialogMoney: false, //提现弹出
      form: {
        much: '', //提现金额
        pwd: '' // 提现密码
      }
    }
  },
  created() {
    this.lists.guid = getToken(this.lists.guid)
    this.lists.tel = getTel(this.lists.tel)

    // 我的收益
    this.Myearnings()
  },
  methods: {
    Myearnings () {
      earningsManage (this.lists).then( res => {
        this.monye = res.data.data
      })
    },
        // 提现
    getMoney () {
      this.$router.push('/withdraw')
    },

  }
  
}
</script>

<style scoped>
  .myearnings {
    background: #fff;
    padding: 20px 15px;
    box-sizing: border-box;
    min-width: 1200px;
  }
  .wrap {
    margin-right: 0;
    background: #FFEFDD;
  }
  .item {
    text-align: center;
    padding: 20px 0;
  }

  .earnings {
    font-size: 18px;
    color: #333;
    line-height: 30px;
  }
  .money{
    position: relative;
    color: #FF3427;
    font-size: 23px;
    font-weight: 800;
    line-height: 38px;
    text-align: center;
  }

  .coin-count {
    position: absolute;
    top: 0;
    right: 90px;
    width: 29px;
  }
  .coin-count  img {
    width: 100%;
  }

  .withdraw {
    float: right;
    margin-right: 130px;
  }
  .withdraw button{
    width: 142px;
    height: 44px;
    line-height: 44px;
    background: #FEAD1D;
    color: #fff;
    border: none;
    margin-top: 30px;
    border-radius: 5px;
  }
</style>