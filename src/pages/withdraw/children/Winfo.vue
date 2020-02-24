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
      <div>提现至一下银行卡</div>
      <div><img src="" alt=""></div>
      <div>
        <div>请输入提现密码</div>
        <div>忘记密码？</div>
      </div>
      <div>
        <input type="text" placeholder="请输入提现密码">
      </div>

      <div>确认提现</div>
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
</style>