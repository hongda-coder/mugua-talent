<template>
  <div>
    <div class="job">
      <el-row :gutter="20" style="min-width: 1000px;">
        <el-col :xs="5" :sm="5" :md="5" :lg="12" :xl="12" style="min-width: 550px;">
          <div class="clearfix job-title">
            <div class="job-name">{{jobState.jobname}}</div> 
            <div class="jpb-price">6-8千/月</div>
          </div>

          <div class="clearfix job-time">
            <div class="end-start">竞聘报名截止时间：<span class="details-time">{{jobState.jpetime}}</span></div>
            <div class="interview-time">面试花时间： <span class="details-time">{{jobState.mstime}}</span> </div>
          </div>  
          <div class="job-req clearfix">
            <div class="job-address">{{jobState.address}}</div>
            <div class="req-education">{{jobState.record}}</div>
            <div class="req-year">{{jobState.working}}</div>
          </div>
          
        </el-col>

        <el-col :xs="5" :sm="5" :md="5" :lg="10" :xl="12" style="min-width: 410px">
          <div class="finder" >
            <div class="share-task">我要分享</div>
            <div class="get-task">领任务</div>
          </div>
        </el-col>
      </el-row>
    </div>

    <div class="job-info">
      <div class="clearfix">
        <div class="job-left">
          <div class="desc-title">职位描述</div>
          <p class="job-duty">
            {{jobState.jobDescriptive}}
            <!-- 岗位职责：
            <div>
              1、加盟商店面的开业计划、营运、管理、培训等整店方案的指导（公司提供教材资料）
              <br>
              2、通过巡店等形式及时发现店面运营的问题并及时进行反馈（相当于值班管理）
              <br>
              3、严格执行公司营运标准,协调公司与加盟商的友好关系.（对加盟店面督导）
              <div class="job-duty">
                任职要求：
                <div>
                  1、年龄30周岁以下、中专以上学历，爱岗敬业，亲和力较强；
                  <br>
                  2、相关餐饮连锁营运管理经验（至少餐厅经理）1年以上；
                  <br>
                  3、专业知识技能方面要求熟悉营运知识和培训管理；
                  <br>
                  4、具备较强的业务能力、学习能力、创新能力、沟通能力和适应性；
                  <br>
                  5、能服从工作安排，经常出差。
                  <br>
                  薪酬福利：底薪4000+100话补+100全勤+300饭补+补助，包住（综合6-8k）
                  <br>
                  公司地址：广州番禺夏滘迎宾路迎宾壹号大厦三楼整层
                  <br>
                </div>
              </div>
            </div> -->
          </p>

          <!-- <div class="desc-title" style="margin-top: 30px;">公司介绍</div>
            <div>
              广州市志在信息科技有限公司主营业务包括人力资源招聘服务、人力资源服务外包、人力资源管理咨询服务、猎头服务，
              企业互联网化升级服务等，持有人力资源服务许可证，是一家具有互联网特色的人才服务企业。
            </div>
          <div> -->

          </div>
        </div>
            <!-- 
        <div class="job-right">

          <div>
            <div class="clearfix" style="margin-bottom: 20px;">
              <div class="company-logo"><img src="@/assets/images/company-logo.png" alt=""></div>
              <div class="company-name">广州市志在信息科技有限公司</div>
            </div>
            <div class="company-item clearfix" >
              <div class="company-size"><i class="iconfont">&#xe672;</i></div>
              <div class="company-count">50-150人</div>
            </div>
            <div class="company-item clearfix">
              <div class="company-size"><i class="iconfont">&#xe630;</i></div>
              <div class="company-count">民营企业</div>
            </div>
            <div class="company-item clearfix">
              <div class="company-size"><i class="iconfont">&#xe66c;</i></div>
              <div class="company-count">计算机硬件</div>
            </div>
            <div class="company-item clearfix">
              <div class="company-size"><i class="iconfont">&#xe62b;</i></div>
              <div class="company-count">广州市海珠区蚝壳街17号“asdasdadsasd”</div>
            </div>
          </div>

          <div style="margin-top: 20px;">
            <div class="other-company">其他企业职位信息（<span>6</span> ）</div>
            <div class="other-item">
              <div class="clearfix">
                <div class="other-name">餐饮运营督导（代招）</div>
                <div class="other-price">6-8千/月</div>
              </div>
              <div class="other-company-name">广州市相约时光餐饮管理有限公司</div>
            </div>

            <div class="other-item">
              <div class="clearfix">
                <div class="other-name">餐饮运营督导（代招）</div>
                <div class="other-price">6-8千/月</div>
              </div>
              <div class="other-company-name">广州市相约时光餐饮管理有限公司</div>
            </div>

            <div class="other-item">
              <div class="clearfix">
                <div class="other-name">餐饮运营督导（代招）</div>
                <div class="other-price">6-8千/月</div>
              </div>
              <div class="other-company-name">广州市相约时光餐饮管理有限公司</div>
            </div>

            <div class="other-item">
              <div class="clearfix">
                <div class="other-name">餐饮运营督导（代招）</div>
                <div class="other-price">6-8千/月</div>
              </div>
              <div class="other-company-name">广州市相约时光餐饮管理有限公司</div>
            </div>

            <div class="other-item">
              <div class="clearfix">
                <div class="other-name">餐饮运营督导（代招）</div>
                <div class="other-price">6-8千/月</div>
              </div>
              <div class="other-company-name">广州市相约时光餐饮管理有限公司</div>
            </div>

            <div class="other-item">
              <div class="clearfix">
                <div class="other-name">餐饮运营督导（代招）</div>
                <div class="other-price">6-8千/月</div>
              </div>
              <div class="other-company-name">广州市相约时光餐饮管理有限公司</div>
            </div>

            <div class="other-item">
              <div class="clearfix">
                <div class="other-name">餐饮运营督导（代招）</div>
                <div class="other-price">6-8千/月</div>
              </div>
              <div class="other-company-name">广州市相约时光餐饮管理有限公司</div>
            </div>

            <div class="other-item">
              <div class="clearfix">
                <div class="other-name">餐饮运营督导（代招）</div>
                <div class="other-price">6-8千/月</div>
              </div>
              <div class="other-company-name">广州市相约时光餐饮管理有限公司</div>
            </div>

          </div>

        </div> -->
    </div>

  </div>
</template>


<script>
import { jobDetails } from "@/api/serve"
import { getTel,getToken } from "@/util"
export default {
  name: 'JobDetails',
  data () {
    return {
      lists: {
        guid: 'ssc-token', //token
        msid: this.$route.query.msid
      },
      jobState: {
        jobname: '',
        address: '',
        working: '',
        record: '',
        jpetime: '',
        mstime: '',
        jobDescriptive: ''
      }
    }
  },
  
  mounted () {
    this.lists.guid = getToken(this.lists.guid) 
    this.details()
    console.log(this.$route.query.msid)
  },
  methods: {
    details () {
      jobDetails (this.lists).then(res => {
        console.log(res)
        if(res.data.Message == -2) {
          this.$router.query('login')
        }
        if (res.data.Message == "success") {
          this.jobState = res.data.data
        }
      })
    }
  }
}
</script>



<style scoped>
  .job-info {
    margin-top: 20px;
    background: #fff;
    padding: 20px 0 ;
    margin-right: 10px;
  }

  .job-left {
    float: left;
    padding-left: 30px;
    width: 1100px;
    /* border-right: 1px solid #ccc; */
    padding-right: 140px;
    box-sizing: border-box;
  }


  .desc-title {
    color: #303030;
    font-size: 16px;
    font-weight: 800;
    line-height: 32px;
    margin-bottom: 5px;
  } 
  
  .desc-title::after {
    content: '';
    display: block;
    width: 31px;
    height: 2px;
    background: #FEAD1D;
  }

  .job-duty {
    margin-top: 10px;
    line-height: 30px;
  }

  .job-right {
    float: left;
    padding-left: 68px;
  }

  .company-logo {
    float: left;
    width: 108px;
  }

  .company-logo img {
    width: 100%;
  }

  .company-name {
    float: left;
    width: 200px;
    margin-left: 10px;
    letter-spacing: 1px;
    color: #848A97;
    padding: 15px 0;
    line-height: 20px;
  }

  .company-size {
    float: left;
    margin-right: 30px;
  } 

  .company-count {
    float: left;
    letter-spacing: 1px;
    color: #848A97;
    width: 275px;
    overflow: hidden;
    white-space:nowrap;
  }

  .company-item {
    line-height: 38px;
  }

  .other-company {
    font-size: 16px;
    font-weight: 800;
  }

  .other-item {
    width: 350px;
    line-height: 24px;
    margin-top: 20px;
  }

  .other-name {
    float: left;
    color: #303030;
    font-size: 16px;
  }

  .other-price {
    float: right;
    color: #FD6845;
  }

  .other-company-name {
    color: #959595;
    font-size: 14px;
  }


  .finder {
    float: right;
    margin-right: 90px;
    cursor: pointer;
  }

  @media screen and (max-width: 1910px) {
    .finder {
      margin-right: 0;
    }
}


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

  .share-task {
    width: 300px;
    line-height: 45px;
    background: #FEAD1D;
    text-align: center;
    color: #fff;
    border-radius: 4px;
    margin-top: 10px;
    font-size: 20px;
  }

  .get-task {
    width: 300px;
    line-height: 45px;
    color: #FEAD1D;
    text-align: center;
    background: #fff;
    border: 1px solid #FEAD1D;
    border-radius: 4px;
    margin-top: 20px;
    font-size: 20px;
  }


</style>