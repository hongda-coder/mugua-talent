<template>
    <div style="background: #fff;">
      <div class="c_talent_w">
        <div class="c_talent_do_want" style="padding-top: 56px;"><img src="@/assets/images/c-talent-do-want.png" alt=""></div>
        <div class="c_talent_what clearfix">
          <div class="clearfix">
            <div class="item">
              <div class="c_task_easy_img"><img src="@/assets/images/c-task-easy.png" alt=""></div>
              <div class="c_task_easy">任务简单</div>
              <div class="c_recommed_talent">为企业推荐人才</div>
            </div>
            <div class="item">
              <div class="c_task_easy_img" style="padding-top: 28px;"><img src="@/assets/images/c-earnings-much.png" alt=""></div>
              <div class="c_task_easy">收益多多</div>
              <div class="c_recommed_talent">面试通过即付佣</div>
            </div>
            <div class="item">
              <div class="c_task_easy_img"><img src="@/assets/images/c-work-type.png" alt=""></div>
              <div class="c_task_easy">工作性质</div>
              <div class="c_recommed_talent">副业兼职多劳多得</div>
            </div>
          </div>
          <div class="c_talent_do_want" style="padding-top: 56px;"><img src="@/assets/images/c-belong-benefit.png" alt=""></div>
        </div>
        <div class="c_benefit_item"><img src="@/assets/images/c-benefit1.png" alt=""></div>
        <div class="c_benefit_item"><img src="@/assets/images/c-benefit2.png" alt=""></div>
        <div class="c_benefit_item"><img src="@/assets/images/c-benefit3.png" alt=""></div>
      </div>
      <div class="c_vision">
        <img src="@/assets/images/c-vision.png" alt="">
      </div>
      <div class="c_consult_way">
        <div class="c_consult_w">
          <div class="c_consult clearfix">
            <div>
              想了解加盟详情,请咨询:020-81747580 
            </div>
            <button class="c_consult_service">咨询客服</button>
          </div>
        </div>
      </div> 
  </div>
</template>
<script>
export default {
  name: "Pic"
}
</script>

<style scoped>
  .c_talent_w {
    width: 1200px;
    margin: auto;

  }
  .item {
    float: left;
    width: 380px;
    background: #fff;
    margin-right: 30px;
    box-shadow: 0px 1px 14px -2px #dbdbdb;
  }
  .item:last-of-type {
    margin-right: 0;
  }

  .c_talent_do_want {
    text-align: center;
    margin-bottom: 30px;
  }

  .c_talent_what .col-md-3 {
    width: 380px;
    box-shadow: 0px 1px 14px -2px #dbdbdb;
    float: left;
    text-align: center;
    margin-right: 30px;
  }
  .c_talent_what .col-md-3:last-of-type {
    margin-right: 0;
  }

  .c_talent_what .c_task_easy {
    font-size: 20px;
    margin-top: 50px;
    color: #666666;
    text-align: center;
  }

  .c_task_easy_img {
    padding-top: 38px;
    text-align: center;
  }


.c_talent_what .c_recommed_talent {
    font-size: 16px;
    margin: 24px 0 45px 0;
    color: #9C9C9C;
    text-align: center;
}

.c_benefit_item {
    margin-top: 38px;
    text-align: center;
}
  .c_vision {
    margin-bottom: -2px;
  }
.c_vision, .c_vision img {
    margin-top: 30px;
    width: 100%;
}
.c_consult_w {
    width: 1200px;
    margin: auto;
}

.c_consult {
    width: 800px;
    margin: auto;
}

.c_consult_way {
    width: 100%;
    background: #FEAD1C;
    text-align: center;
}
.c_consult div {
    float: left;
    line-height: 120px;
    font-size: 29px;
    color: #fff;
}

.c_consult_service {
    float: left;
    display: block;
    width: 200px;
    height: 65px;
    font-size: 29px;
    background: #FEAD1C;
    border: 1px solid #fff;
    color: #fff;
    border-radius: 30px;
    margin-left: 30px;
    margin-top: 30px;
} 
</style>