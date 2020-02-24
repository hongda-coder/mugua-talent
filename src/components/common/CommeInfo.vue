<template>
  <div>
    <el-row :gutter="10" style="margin: 0;">
      <el-col class="card" :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
        <div class="grid-content bg-purple c-card-info clearfix">
          <div class="c-member-avatar"><img src="@/assets/images/c-my-member.png"></div>
          <div class="c-member-count">我的群成员<span> 250</span> </div>
          <div class="c-member-manage">
            <button>管理</button>
          </div>
        </div>
      </el-col>
      <el-col class="card" :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
        <div class="grid-content bg-purple c-card-info clearfix" style="width: 470px;">
          <div class="c-member-avatar"><img src="@/assets/images/c-my-recommend.png"></div>
          <div class="c-member-count" style="margin-right: 0;">推荐到场 <span>0</span></div>
          <div class="c-member-count">推荐面过 <span>0</span></div>
          <div class="c-member-manage">
            <button>查看</button>
          </div>
        </div>
      </el-col>

      <el-col class="card" :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
        <div class="grid-content bg-purple c-card-info clearfix">
          <div class="c-member-avatar"><img src="@/assets/images/c-my-earnings.png"></div>
          <div class="c-member-count">我的收益<span> 250</span> </div>
          <div class="c-member-manage">
            <button>提现</button>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'CommeInfo'
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