<template>
  <div class="resume">
    <div class="person-info clearfix">
      <div class="person-avatar"><img src="@/assets/images/c-avatar.png" alt=""></div>
      <div class="person-list">
        <div class="person"><span class="name">陈小姐姐</span><span class="sex">女</span></div>
        <div class="info-item">年龄：<span>18岁</span></div>
        <div class="info-item">联系方式：<span>12325123521</span></div>
      </div>
      <div class="person-concat">
        <div>工作年限<span>1-3年</span></div>
        <div>电子邮箱<span>1254123655222@qq.com</span></div>
      </div>
    </div>
    <!-- 求职意向 -->
    <div>
      <div class="my-item">
        <div class="icon"><i class="iconfont">&#xe619;</i></div>
        <div class="title">求职意向</div>
      </div>
      <div class="itemt-info clearfix">
        <div class="state-item">求职状态：<span class="state-color">离职，目前在招工作</span></div>
        <div class="state-item">期望地点：<span class="state-color">广州天河</span></div>
      </div>
      <div class="itemt-info clearfix">
        <div class="state-item">期望行业：<span class="state-color">离职，目前在招工作</span></div>
        <div class="state-item">期望职位：<span class="state-color">UI设计</span></div>
      </div>
      <div class="itemt-info clearfix">
        <div class="state-item">期望月薪：<span class="state-color">离职，目前在招工作</span></div>
        <div class="state-item">工作性质：<span class="state-color">全职</span></div>
      </div>
    </div>
    <!-- 求职意向 -->

    <!-- 工作经验 -->
    <div>
      <div class="my-item">
        <div class="icon"><i class="iconfont">&#xe663;</i></div>
        <div class="title">工作经验</div>
      </div>

      <div>
        <div class="work-item">
          <div class="my-work clearfix">
            <div class="company">广州市志在信息科技有限公司</div>
            <div class="time">2018.11-2019.10</div>
          </div>
          <div class="job-name"><span>销售经理</span> <span>|</span> <span>8000-10000元/月</span></div>
          <div class="itemt-info clearfix">
            <div class="state-item">职位类别：<span class="state-color">业务销售</span></div>
            <div class="state-item">所属行业：<span class="state-color">互联网</span></div>
          </div>
          <div class="work-task">
            <div class="title">工作职责：</div>
            <div>1.这是工作职责这是工作职责这是工作职责这是工作职责这是工作职责这是工作职责这是工作职责</div>
          </div>
        </div>
        
        <div class="work-item">
          <div class="my-work clearfix">
            <div class="company">广州市志在信息科技有限公司</div>
            <div class="time">2018.11-2019.10</div>
          </div>
          <div class="job-name"><span>销售经理</span> <span>|</span> <span>8000-10000元/月</span></div>
          <div class="itemt-info clearfix">
            <div class="state-item">职位类别：<span class="state-color">业务销售</span></div>
            <div class="state-item">所属行业：<span class="state-color">互联网</span></div>
          </div>
          <div class="work-task">
            <div class="title">工作职责：</div>
            <div>1.这是工作职责这是工作职责这是工作职责这是工作职责这是工作职责这是工作职责这是工作职责</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 工作经验 -->

    <!-- 项目经验 -->
    <div>
      <div class="my-item">
        <div class="icon"><i class="iconfont">&#xe737;</i></div>
        <div class="title">项目经验</div>
      </div>
      <div>
        <div class="work-item">
          <div class="my-work clearfix">
            <div class="company">即招网</div>
            <div class="time">2018.11-2019.10</div>
          </div>
          <div class="work-task">
            <div class="title">工作职责：</div>
            <div>1.这是工作职责这是工作职责这是工作职责这是工作职责这是工作职责这是工作职责这是工作职责</div>
          </div>
        </div>
        <div class="work-item">
          <div class="my-work clearfix">
            <div class="company">即招网</div>
            <div class="time">2018.11-2019.10</div>
          </div>
          <div class="work-task">
            <div class="title">工作职责：</div>
            <div>1.这是工作职责这是工作职责这是工作职责这是工作职责这是工作职责这是工作职责这是工作职责</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 项目经验 -->

    <!-- 教育经历 -->
    <div>
      <div class="my-item">
        <div class="icon"><i class="iconfont">&#xe737;</i></div>
        <div class="title">教育经历</div>
      </div>
      <div>
        
      </div>
    </div>
    <!-- 教育经历 -->
  </div>
</template>


<script>
export default {
  name: 'resume'
}
</script>

<style scoped>
  .resume {
    margin-top: 20px;
    width: 928px ;
    background: #fff;
  }

  .person-info {
    background: url("../../assets/images/c-resume-bg.png") no-repeat;
  }

   .person-info > .person-avatar {
    float: left;
    width: 125px;
    margin: 20px 36px;
  }

  .person-avatar > img {
    width: 100%;
  }

  .person-info > .person-list {
    float: left;
    margin-top: 20px;
    margin-right: 100px;
    color: #fff;
  }

  .person-info > .person-concat {
    float: left;
    margin-top: 60px;
    color: #fff;
    font-size: 16px;
    line-height: 30px;
  }

  .person-list > .person {
    font-size: 23px;
    line-height: 42px;
  }

  .person > .name {
    margin-right: 25px;
  }

  .person-list > .info-item {
    line-height: 30px;
    font-size: 16px;
  }

  /* 求职意向 */
  .my-item {
    padding: 0 15px 40px 15px;
    box-sizing: border-box;
    margin-top: 20px;
    position: relative;
     
  }
  .my-item > .icon{
    float: left;
    color: #FEAF21;
    margin-right: 10px;
  }

  .my-item > .title {
    float: left;
    color: #303030;
  }

  .my-item::before {
    content: '';
    display: block;
    width: 140px;
    height: 4px;
    background: #959595;
    position: absolute;
    top: 26px;
    left: 15px;
    z-index: 9;
  }

  .my-item::after {
    content: '';
    display: block;
    width: 900px;
    height: 1px;
    background: #FEAF21;
    position: absolute;
    top: 28px;
    left: 15px;
  }

  .work-item > .itemt-info {
    padding: 0;
  }

  .itemt-info {
    padding: 0 15px;
   }

  .itemt-info > .state-item {
    float: left;
    width: 400px;
    color: #999999;
    line-height: 30px;
    padding: 0;
  }

  .itemt-info > .state-item:last-of-type {
    width: auto;
  }

  .state-item > .state-color{ 
    color: #303030;
  }

  .work-item {
    padding: 0 15px 0 15px;
    margin-top: 20px;
  }

  .work-item:first-of-type{
    padding: 0 15px;
    margin-top: 0;
    border: none;
  }

  .work-item:first-of-type > .my-work{
    border: none;
  }
  .work-item > .my-work{
    padding-top: 20px;
    border-top: 1px dashed #959595;
  }

  .my-work > .company{
    float: left;
    font-size: 16px; 
  }

  .my-work > .time {
    float: right;
    line-height: 30px;
    color: #999;
    font-size: 16px;
  }

  .job-name {
    line-height: 30px;
    color: #999;
    font-size: 16px;
  }

  .work-task {
    line-height: 30px;
  }

  .work-task > .title  {
    font-size: 16px;
    color: #999;
  }

</style>