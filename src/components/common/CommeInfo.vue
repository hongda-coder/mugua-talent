<template>
  <div>
    <el-row :gutter="10" style="margin: 0;">
      <el-col class="card" :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
        <div class="grid-content bg-purple c-card-info clearfix">
          <div class="c-member-avatar"><img src="@/assets/images/c-my-member.png"></div>
          <div class="c-member-count">我的群成员<span> {{sscCount}}</span> </div>
          <div class="c-member-manage">
            <button @click="goGroup">管理</button>
          </div>
        </div>
      </el-col>
      <el-col class="card" :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
        <div class="grid-content bg-purple c-card-info clearfix" style="width: 470px;">
          <div class="c-member-avatar"><img src="@/assets/images/c-my-recommend.png"></div>
          <div class="c-member-count" style="margin-right: 0;">推荐到场 <span>{{dmCount}}</span></div>
          <div class="c-member-count">推荐面过 <span>{{tgCount}}</span></div>
          <div class="c-member-manage">
            <button @click="goRecommend">查看</button>
          </div>
        </div>
      </el-col>

      <el-col class="card" :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
        <div class="grid-content bg-purple c-card-info clearfix">
          <div class="c-member-avatar"><img src="@/assets/images/c-my-earnings.png"></div>
          <div class="c-member-count">我的收益<span>{{inCome}}</span> </div>
          <div class="c-member-manage">
            <button @click="goCommission">提现</button>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>

import { personEarnings } from "@/api/serve"
import { getTel,getToken } from "@/util"

export default {
  name: 'CommeInfo',
  data () {
    return {
      lists: {
        guid: 'ssc-token', //token
        tel: 'tel',  // 加密得电话号码
      },
      sscCount: '',  // 我的群成员
      dmCount: '',   // 推荐到场
      tgCount: '',  // 推荐面过
      inCome: ''  // 我的收益
    }
  },
  created () {
    this.personEarnings()
  },
  methods: {
    personEarnings () {
      this.lists.guid = getToken(this.lists.guid)
      this.lists.tel = getTel(this.lists.tel)
      personEarnings(this.lists).then( res => {
        this.sscCount = res.data.data.sscCount
        this.dmCount = res.data.data.dmCount
        this.tgCount = res.data.data.tgCount
        this.inCome = res.data.data.inCome
        // console.log(res)
      })
    },

    // 跑去群主管理
    goGroup () {
      this.$router.push("./group")
    },

    // 跑去推荐管理
    goRecommend () {
      this.$router.push("./recommend")
    },
    // 跑去群主管理
    goCommission () {
      this.$router.push("./commission")
    }
  }
}
</script>
<style scoped>
.card {
  background: #fff;
  border-right: 10px solid #F2F2F2;
  margin-top: 20px;
}
.c-member-avatar,.c-member-count,.c-member-manage  {
  float: left;
}
.c-member-count {
  margin: 0 30px;
}
.c-member-count span {
  margin-left: 15px;
  color: #FF0909;
}
.c-member-manage button{
  width: 100px;
  text-align: center;
  background: #FEAD1C;
  border: none;
  border-radius: 4px;
  color: #fff;
  line-height: 35px;
}
.c-card-info {
  width: 380px;
  margin:20px auto;
  line-height: 60px;
}
</style>