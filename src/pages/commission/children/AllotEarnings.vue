<template>
  <div class="myearnings">
    <div class="wrap clearfix">
      <el-row :gutter="10" class="earnings-info clearfix" style="">
        <el-col style="float: left; width: calc(70% - 50px);padding: 0;">
          <el-row :gutter="10">
            <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
              <div class="item">
                <div class="earnings">本月累计收益</div>
                <div class="account">
                  <div class="money">
                  ￥21.00<span style="margin-left: 20px;"><img src="@/assets/images/c-coin-count.png" alt=""></span>
                  </div>
                </div>
              </div>
            </el-col>
            <el-col :xs="8" :sm="8" :md="8"  :lg="8" :xl="8">
              <div class="item">
                <div class="earnings">总收益</div>
                <div class="account">
                  <div class="money">
                  ￥21.00<span style="margin-left: 20px;"><img src="@/assets/images/c-coin-count.png" alt=""></span>
                  </div>
                </div>
              </div>
            </el-col>
            <el-col :xs="8" :sm="8" :md="8" :xl="8">
              <div class="item">
                <div class="earnings">可提现</div>
                <div class="account">
                  <div class="money">
                  ￥21.00<span style="margin-left: 20px;"><img src="@/assets/images/c-coin-count.png" alt=""></span>
                  </div>
                </div>
              </div>
            </el-col>
          </el-row>
        </el-col>
        <el-col style="float: right;margin-right: 50px;width: 30%;padding: 0;">
          <div class="withdraw">
            <button>提现</button>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="search-form">
      <el-form ref="form" :inline="true" :model="form" label-width="80px">
        <el-form-item label="开始时间">
          <el-col :span="24">
            <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="结束时间">
          <el-col :span="24">
            <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
          </el-col>
        </el-form-item>

        <el-form-item>
          <el-button class="search" type="button" @click="search">查询</el-button>
        </el-form-item>

      </el-form>
    </div>
    <div>
      <el-table :data="table" height="250" border :row-style="{height: '34px',padding: '0px',lineHeight: '34px'}" :cell-style="{ padding: '0'}"
        :header-cell-style="{background: '#F1F5FE',padding: '0px',lineHeight: '40px'}">
        <af-table-column prop="number" label="编号" align="center"></af-table-column>
        <af-table-column prop="guild" label="流水号" align="center"></af-table-column>
        <af-table-column prop="name" label="所属成员" align="center"></af-table-column>
        <af-table-column prop="address" label="到场人数" align="center"></af-table-column>
         <af-table-column prop="address" label="面过人数" align="center"></af-table-column>
        <af-table-column prop="education" label="到场所获佣金" align="center"></af-table-column>
        <af-table-column prop="end_data" label="面过所获佣金" align="center"></af-table-column>
        <af-table-column prop="start_data" label="共获佣金" align="center"></af-table-column>
        <af-table-column prop="commission1" label="创建时间" align="center"></af-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AllotEarnings',
  data() {
    return {
      form: {
        date1: '',
      },
      table: [{
        number:1,
        guild: '佛山市畅腾智能家居有限公司',
        name: '业务销售',
        address: '上海市普陀区金沙江路 1518 弄',
        experience: '3-5年',
        education: '本科',
        end_data: '2020年1月9日',
        start_data: '2020年1月10日 15:00-17:00',
        commission1: '5人',
        commission2: '待面试'
      }, {
        number:1,
        guild: '佛山市畅腾智能家居有限公司',
        name: '业务销售',
        address: '上海市普陀区金沙江路 1518 弄',
        experience: '3-5年',
        education: '本科',
        end_data: '2020年1月9日',
        start_data: '2020年1月10日 15:00-17:00',
        commission1: '5人',
        commission2: '面试中'
      }, {
        number:1,
        guild: '佛山市畅腾智能家居有限公司',
        name: '业务销售',
        address: '上海市普陀区金沙江路 1518 弄',
        experience: '3-5年',
        education: '本科',
        end_data: '2020年1月9日',
        start_data: '2020年1月10日 15:00-17:00',
        commission1: '5人',
        commission2: '已完成'
      }, {
        number:1,
        guild: '佛山市畅腾智能家居有限公司',
        name: '业务销售',
        address: '上海市普陀区金沙江路 1518 弄',
        experience: '3-5年',
        education: '本科',
        end_data: '2020年1月9日',
        start_data: '2020年1月10日 15:00-17:00',
        commission1: '5人',
        commission2: '竞聘中'
      }, {
        number:1,
        guild: '佛山市畅腾智能家居有限公司',
        name: '业务销售',
        address: '上海市普陀区金沙江路 1518 弄',
        experience: '3-5年',
        education: '本科',
        end_data: '2020年1月9日',
        start_data: '2020年1月10日 15:00-17:00',
        commission1: '5人',
        commission2: '竞聘中'
      }, {
        number:1,
        guild: '佛山市畅腾智能家居有限公司',
        name: '业务销售',
        address: '上海市普陀区金沙江路 1518 弄',
        experience: '3-5年',
        education: '本科',
        end_data: '2020年1月9日',
        start_data: '2020年1月10日 15:00-17:00',
        commission1: '5人',
        commission2: '竞聘中'
      },{
        number:1,
        guild: '佛山市畅腾智能家居有限公司',
        name: '业务销售',
        address: '上海市普陀区金沙江路 1518 弄',
        experience: '3-5年',
        education: '本科',
        end_data: '2020年1月9日',
        start_data: '2020年1月10日 15:00-17:00',
        commission1: '5人',
        commission2: '竞聘中'
      }]
    }
  },
  methods: {
    search () {
    alert("45646")
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

  /* .coin-count {
    position: absolute;
    top: 0;
    right: 30px;
    width: 29px;
  }
  .coin-count  img {
    width: 100%;
  } */

  .withdraw {
    float: right;
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

  .search-form {
    margin-top: 20px;
  }

  .search {
    background: #FEAD1D;
    color: #fff;
    border: none;
    margin-left: 20px;
  }

</style>