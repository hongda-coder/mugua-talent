<template>
  <div class="withdraw">
    <div>
      <div class="account-info">
        <div class="account">银行账户</div>
      </div>

      <div>
        <div class="card" style="display: none;">
          <div class="icon">
            <i class="iconfont" @click="bindBlankBtn">&#xe60b;</i>
          </div>
          <div class="black-card">您尚未绑定银行卡，<span>绑定即可提现</span> </div>
        </div>
        
        <div >
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
        </div>
      </div>



      <!-- <div class="bound"><button>去绑定</button></div> -->
    </div>

    <div>
      <el-dialog
        title="绑定银行卡"
        :visible.sync="dialogVisible"
        width="30%"
        center
       >
        <el-form :label-position="labelPosition" label-width="80px" :model="lists">
          <el-form-item label="持卡人">
            <el-input v-model="lists.name"></el-input>
          </el-form-item>
          <el-form-item label="银行卡号">
            <el-input v-model="lists.bank"></el-input>
          </el-form-item>
          <el-form-item label="开户支行">
            <el-input v-model="lists.branch"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input type="password" v-model="lists.pwd"></el-input>
          </el-form-item>
          <!-- <el-form-item label="验证码">
            <el-input v-model="formLabelAlign.type" style="width: 65%;"></el-input>
            <el-button  style="width: 33%;margin-left: 2%;background: #FEAD1C; color: #fff;">获取验证码</el-button>
          </el-form-item> -->

          <el-form-item>
            <el-button  style="background: #FEAD1C; color: #fff;border: none;width: 100%;" @click="bindMyBank">立即绑定</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
    </div>

    <div>
      <div class="account-info">
        <div class="account">提现记录</div>
      </div>
      <div class="deposit">
        <el-table :data="table" height="250" border :row-style="{height: '34px',padding: '0px',lineHeight: '34px'}" :cell-style="{ padding: '0'}"
          :header-cell-style="{background: '#F1F5FE',padding: '0px',lineHeight: '40px'}">
          <af-table-column prop="guild" label="流水号" align="center"></af-table-column>
          <af-table-column prop="commission1" label="申请时间" align="center"></af-table-column>
          <af-table-column prop="education" label="提现金额（￥）" align="center"></af-table-column>
          <af-table-column prop="start_data" label="提现账户" align="center"></af-table-column>
          <af-table-column prop="commission1" label="提现状态" align="center"></af-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
import { bindBank } from "@/api/serve"
import { getToken } from "@/api/cookie"
import { getTel } from "@/util"
export default {
  name: 'Withdraw',
  data () {
    return {
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
      }],
      dialogVisible: false,
      lists: {
        guid: '',
        tel: 'tel',
        name: '', // 持卡人姓名
        bank: '', //卡号
        branch: '', //开户银
        pwd: '' // 密码
      },
      labelPosition: 'right',
        formLabelAlign: {
          name: '',
          region: '',
          type: ''
        }
    }
  },
  created () {
    this.lists.guid = getToken()
    this.lists.tel = getTel(this.lists.tel)
  },
  methods: {

    
    bindBlankBtn () {
      this.dialogVisible = true
    },

    bindMyBank () {
      bindBank (this.lists).then( res => {
        console.log(res)
      })
    },
    handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
  }
}
</script>

<style scoped>
  .withdraw {
    background: #fff;
    padding: 20px 15px;
  }

  .account-info {
    border-bottom: 1px solid #FEAD1C;
  }
  .account{
    border-left: 3px solid #FEAD1C;
    padding-left: 15px;
    font-size: 16px;
    padding-bottom: 5px;
  }

  .card {
    width: 420px;
    height: 210px;
    border: 2px dashed #EBEAEA;
    background: #F9F9F9;
    margin: 15px auto;
    text-align: center;
  }

  .icon {
    padding-top: 45px;
  }
  .icon .iconfont {
    font-size: 80px;
    color: #FEAD1C;
  }

  .black-card {
    margin-top: 20px;
    font-size: 16px;
    line-height: 35px;
  }

  .deposit {
    padding: 20px 0;
  }

  /deep/ .el-dialog__header {
    border-bottom: 1px solid #cecece;
  }

  /deep/ .el-dialog__title {
    color: #FEAF22;
  }




  .bank-card {
    background: #F2F2F2;
    width: 420px;
    height: 210px;
    border-radius: 4px;
    padding: 5px 20px;
    box-sizing: border-box;
    margin:20px auto;
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







</style>