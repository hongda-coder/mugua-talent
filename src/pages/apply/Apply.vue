<template>
  <div>
    <div class="job">
      <el-row :gutter="20" style="min-width: 1000px;">
        <el-col :xs="5" :sm="5" :md="5" :lg="12" :xl="12" style="min-width: 550px;">
          <div class="clearfix job-title">
            <div class="job-name">餐饮运营督导（代招）</div> 
            <div class="jpb-price">6-8千/月</div>
          </div>

          <div class="clearfix job-time">
            <div class="end-start">竞聘报名截止时间：<span class="details-time">2020-3-19</span></div>
            <div class="interview-time">面试花时间： <span class="details-time">2020-03-20 9:00-17:00</span> </div>
          </div>  
          <div class="job-req clearfix">
            <div class="job-address">广州市-番禺区</div>
            <div class="req-education">学历不限</div>
            <div class="req-year">1-3年</div>
          </div>
        </el-col>


        <el-col :xs="5" :sm="5" :md="5" :lg="10" :xl="12" style="min-width: 410px">
          <div>
            <div class="my-state"><i class="iconfont">&#xe649;</i>竞聘中</div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div style="margin-right: 10px;">
      <div class="tab clearfix">
        <div class="item current">报名情况</div>
      </div>
      <div class="table-wrap">
        <el-table :data="table" height="250" border :row-style="{height: '34px',padding: '0px',lineHeight: '34px'}" :cell-style="{ padding: '0'}"
          :header-cell-style="{background: '#F1F5FE',padding: '0px',lineHeight: '40px'}">
          <af-table-column prop="id" label="编号" align="center" width="70px">
          <template slot-scope="scope">
              {{scope.$index+1}}
          </template>
          </af-table-column>
          <af-table-column prop="TrueName" label="姓名" align="center"></af-table-column>
          <af-table-column prop="sex" label="性别" align="center">
            <template slot-scope="scope">
              {{scope.row.sex | userSex}}
            </template>
          </af-table-column>
          <af-table-column prop="tel" label="联系方式" align="center"></af-table-column>
          <af-table-column prop="" label="求职意向" align="center"></af-table-column>
          <af-table-column prop="working" label="工作经历" align="center"></af-table-column>
          <af-table-column prop="record" label="教育经历" align="center"></af-table-column>
          <af-table-column prop="mstime" label="项目经验" align="center"></af-table-column>
          <af-table-column prop="number" label="语言能力" align="center"></af-table-column>
          <af-table-column prop="state" label="自我评价" align="center"></af-table-column>
          <af-table-column prop="rdMoenyOutside" label="创建时间" align="center"></af-table-column>
          <af-table-column prop="aiMoenyOutside" label="操作" align="center" width="150">
            <template slot-scope="scope">
              <el-button type="text" size="small" class="commonColor" @click="goOut(scope.$index,scope.row)">查看简历</el-button>
            </template>
          </af-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>
<script>
import { applyList } from "@/api/serve"
import { getTel,getToken } from "@/util"
export default {
  name: 'Apply',
  data() {
    return {
    table: [{
        cname: '',
        jobname: '',
        address: '',
        working: '',
        education: '',
        record: '',
        jpetime: '',
        number: '',
        state: '',
        aiMoenyOutside: '',
        rdMoenyOutside: '',
      }],
      lists: {
        guid: 'ssc-token', //token
        tel: 'tel',  // 加密得电话号码
        limit: 1 , // 当前页
        curr: 10, //当前页多少数据
        msid: this.$route.query.msid
      },
    }
  },
  mounted () {
    this.lists.guid = getToken(this.lists.guid)
    this.lists.tel = getTel(this.lists.tel)
    this.applyList ()
  },
  methods: {
    applyList () {
      applyList(this.lists).then( res => {
        this.table = res.data.data
        console.log(res)
      })
    },
    goOut () {
      this.$router.push('resume')
    }
  },
  filters: {
    userSex (type) {
      switch (type) {
        case '1':
          return '男'
        case '2':
          return '女'
        default:
          return type 
      }
    }
  }
}
</script>
<style scoped>

 .job {
    margin-top: 20px;
    background: #fff;
    padding: 10px 30px;
    margin-right: 10px;
  }

  .job-title {
    line-height: 48px;
    margin-bottom: 10px;
  }

  .job-name {
    float: left;
    font-size: 32px;
    color: #303030;
  }

  .jpb-price {
    float: left;
    margin-left: 10px;
    color: #FD5F39;
    font-size: 34px;
    font-weight: 800;
  }

  .job-time,.job-req {
    line-height: 24px;
  }

  .end-start {
    float: left;
    font-size: 15px;
    color: #303030;
    margin-right: 20px;
  }

  .interview-time {
    float: left;
    font-size: 15px;
    color: #303030;
  }

  .details-time {
    color: #FEAD1D;
    font-size: 16px;
  }

  .job-address,.req-education,.req-year {
    float: left;
    font-size: 15px;
    color: #303030;
    margin-right: 10px;
  }

  .my-state {
    float: right;
    width: 306px;
    line-height: 45px;
    border: 1px solid #FE1716;
    margin-top: 20px;
    background: #FFE7E7;
    color: #FE1716;
    text-align: center;
    border-radius: 4px;
    font-size: 20px;
  }

  .my-state .iconfont {
    font-size: 20px;
    margin-right: 5px;
  }


.tab {
  margin-top: 20px;
  background: #fff;
  border-bottom: 2px solid #ccc;
}
 
.current {
  width: 150px;
  color: #fff;
  background: #FEAD1D;
  line-height: 36px;
  text-align: center;
}
.content {
  background: #fff;
  padding: 30px 20px;
}

.commonColor {
  color: #FEAD1D;
}

</style>