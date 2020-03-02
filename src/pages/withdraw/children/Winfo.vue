<template>
  <div style="background: #fff;">
    <div class="c-people-title clearfix">
      <div class="c-info-name">我的收益  > 提现</div>
    </div>

    <div style="padding: 20px 40px;">
      <div class="get-money">可提现金额（元）：<span class="money-count">212121</span></div>
      <div class="get-money">提现金额（元）</div>
      <div class="clearfix can-money">
        <div class="most-money">单次提现金额不能低于100元，预计1-2个工作日到账，免手续费。</div>
        <div class="all-money">全部提现</div>
      </div>
      <div class="input-count">
        <input type="text" placeholder="请输入提现金额">
      </div>
      <div class="title-bank">提现至一下银行卡</div>
      <div class="bank-card clearfix">
        <div class="bank-img"><img src="@/assets/images/c-bank-img.png" alt=""></div>
        <div class="bank-type">
          <div >中国建设银行 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;储蓄卡</div>
          <div>
            <span><img  alt=""></span>
            <span>8354</span>
            </div>
        </div>
      </div>
      <div class="clearfix" style="width: 600px;">
        <div class="most-money" style="font-size: 18px;color: #333;"> 请输入提现密码</div>
        <div class="all-money">忘记密码？</div>
      </div>
      <div class="with-password">
        <input type="text" placeholder="请输入提现密码">
      </div>

      <div class="comfire">确认提现</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PersonalInfo',
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
    background: #F2F2F2;
    width: 316px;
    height: 68px;
    border-radius: 4px;
    padding: 5px 20px;
    box-sizing: border-box;
    margin-bottom: 12px;
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
  }

  .title-bank {
    line-height: 36px;
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
    line-height: 45px;
    color: #fff;
    background: #FEAD1C;
    border-radius: 4px;
  }
</style>