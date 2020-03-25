<template>
  <div class="myearnings">

    <div class="search-form">
      <!-- <el-form ref="form" :inline="true" :model="dataForm" label-width="80px">
        <el-form-item label="开始时间">
          <el-col :span="24">
            <el-date-picker type="date" placeholder="选择日期" v-model="dataForm.btime" style="width: 100%;"></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="结束时间">
          <el-col :span="24">
            <el-date-picker type="date" placeholder="选择日期" v-model="dataForm.etime" style="width: 100%;"></el-date-picker>
          </el-col>
        </el-form-item>

        <el-form-item>
          <el-button class="search" type="button" @click="search">查询</el-button>
        </el-form-item>

      </el-form> -->
    </div>
    <div>
      <el-table :data="table" height="440" border :row-style="{height: '34px',padding: '0px',lineHeight: '34px'}" :cell-style="{ padding: '0'}"
        :header-cell-style="{background: '#F1F5FE',padding: '0px',lineHeight: '40px'}">
        <af-table-column prop="id" label="编号" align="center" width="70px">
        <template slot-scope="scope">
            {{scope.$index+1}}
        </template>
        </af-table-column>
        <af-table-column prop="orderno" label="流水号" align="center"></af-table-column>
        <af-table-column prop="cname" label="所属企业" align="center"></af-table-column>
        <af-table-column prop="jobename" label="职位名称" align="center"></af-table-column>
        <af-table-column prop="dmnumber" label="到场人数" align="center"></af-table-column>
        <af-table-column prop="tgnumber" label="面过人数" align="center"></af-table-column>
        <af-table-column prop="dmmoney" label="佣金节点" align="center"></af-table-column>
        <af-table-column prop="tgmoney" label="共获佣金" align="center"></af-table-column>
        <af-table-column prop="time" label="创建时间" align="center"></af-table-column>
      </el-table>
    </div>

    <!-- 分页 -->
    <div class="block" style="width: 520px;margin: 15px auto;text-align: center;">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="dataForm.limit"
        :page-size="dataForm.curr"
        layout="prev, pager, next, jumper"
        :total="rows">
      </el-pagination>
    </div>
  </div>
</template>

<script>

import { taskMoney } from "@/api/serve"
import { getTel, getToken } from "@/util"
export default {
  name: 'TaskEarnings',
  data() {
    return {
      rows:1, //数据总数量
      dataForm: {
        limit: 1,// 当前数据条数
        curr: 10, // 当钱页数
        tel: 'tel', //加密手机号
        guid: 'ssc-token'  // token
      },
      table: [{ 
        orderno:'', // 流水号
        cname: '', // 所属企业
        jobename: '', // 职位名称
        dmnumber: '', // 到场人数
        tgnumber: '', // 面过人数
        dmmoney: '', // 到场所获佣金
        tgmoney: '', // 面过所获佣金
        money: '', // 总钱
        time: '',
      }]
    }
  },
  mounted () {
    this.dataForm.guid = getToken(this.dataForm.guid)
    this.dataForm.tel = getTel(this.dataForm.tel)
    this.getTastMoney()
  },
  methods: {
    search () {
      this.getTastMoney ()
    },
    getTastMoney () {
      taskMoney(this.dataForm).then(res => {
        if(res.data.Message == "-2") {
          this.$router.push("login")
        }
        this.table = res.data.data 
        this.rows = res.data.listcount
      })
    },

    // 分页
    handleSizeChange(val) {
      console.log(val)
      this.dataForm.curr = val ||this.dataForm.curr 
      this.getTastMoney() //重新调用接口
    },
    handleCurrentChange(val) {
      this.dataForm.limit = val ||this.dataForm.limit 
      this.getTastMoney() //重新调用接口
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