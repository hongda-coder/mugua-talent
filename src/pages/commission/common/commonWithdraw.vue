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
      </el-row>
    </div>
  </div>
</template>

<script>

import { earningsManage } from "@/api/serve"
import { getToken } from "@/api/cookie"
import { getTel } from "@/util"

export default {
  name: 'MyEarnings',
  data () {
    return {
      lists: {
        guid: '',
        tel: 'tel'
      },
      monye: {
        revenuestatistics: '', //总收益
        cumulativewithdraw: '', //可提现
        Monthstatistics: '',  //月提现
        withdraw: '', // 已提现
      },
    }
  },
  created() {
    this.lists.guid = getToken()
    this.lists.tel = getTel(this.lists.tel)

    // 我的收益
    this.Myearnings()
  },
  methods: {
    Myearnings () {
      earningsManage (this.lists).then( res => {
        this.monye = res.data.data
      })
    }
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
    margin-right: 30px;
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