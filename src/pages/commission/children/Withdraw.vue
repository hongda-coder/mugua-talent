<template>
  <div class="withdraw">
    <div>
      <div class="account-info">
        <div class="account">银行账户</div>
      </div>
      <div>
        <div class="card" v-if="bankid =='' ">
          <div class="icon">
            <img src="@/assets/images/add-bank.png" @click="bindBlankBtn" alt="">
          </div>
          <div class="black-card">您尚未绑定银行卡，<span>绑定即可提现</span> </div>
        </div>
        
        <div v-else>
          <div class="bank-card clearfix">
            <div class="bank-img"><img src="@/assets/images/c-bank-tag.png" alt=""></div>
            <div class="bank-type">
              <div class="what-bank"><span>{{bankForm.branch}}</span><span class="c-save-share">存管专享</span></div>
              <div class="c-bank-number">
                <span class="c-omit-count"><img src="@/assets/images/c-omit-count.png" alt=""></span>
                <span class="c-omit-count"><img src="@/assets/images/c-omit-count.png" alt=""></span>
                <span class="c-omit-count"><img src="@/assets/images/c-omit-count.png" alt=""></span>
                <span>{{bankForm.bank}}</span>
                </div>
            </div>
          </div>
          <div class="unbindBank" @click="unbindBank">解绑</div>
        </div>
      </div>
    </div>

    <!-- 提取记录 -->
    <div>
      <div class="account-info">
        <div class="account">提现记录</div>
      </div>
      <div class="deposit">
        <el-table :data="recordTable" height="250" border :row-style="{height: '34px',padding: '0px',lineHeight: '34px'}" :cell-style="{ padding: '0'}"
          :header-cell-style="{background: '#F1F5FE',padding: '0px',lineHeight: '40px'}">
          <af-table-column prop="id" label="编号" align="center" width="70px">
            <template slot-scope="scope">
                {{scope.$index+1}}
            </template>
          </af-table-column>
          <af-table-column prop="orderno" label="流水号" align="center"></af-table-column>
          <af-table-column prop="time" label="申请时间" align="center"></af-table-column>
          <af-table-column prop="money" label="提现金额（￥）" align="center"></af-table-column>
          <af-table-column prop="bank" label="提现账户" align="center"></af-table-column>
          <af-table-column prop="state" label="提现状态" align="center"></af-table-column>
        </el-table>
      </div>
    </div>

    <!-- 绑定银行卡 -->
    <div>
      <el-dialog
        title="绑定银行卡"
        :visible.sync="dialogBank"
        width="30%"
        center
       >
        <el-form :label-position="labelPosition" label-width="80px" :model="lists" :rules="rules">
          <el-form-item label="持卡人" prop="name">
            <el-input v-model="lists.name"></el-input>
          </el-form-item>
          <el-form-item label="银行卡号" prop="bank">
            <el-input v-model="lists.bank"></el-input>
          </el-form-item>
          <el-form-item label="开户支行" prop="branch">
            <el-input v-model="lists.branch"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input type="password" v-model="lists.pwd"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button  style="background: #FEAD1C; color: #fff;border: none;width: 100%;" @click="bindMyBank">立即绑定</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
      <el-popover
        ref="popover1"
        placement="top-start"
        title="银行卡绑定"
        width="200"
        trigger="hover"
        content="银行卡绑定成功">
      </el-popover>
    </div>
    <!-- 分页 -->
    <div style="width: 30%; min-width: 300px;margin: auto;">
      <div class="block">
        <el-pagination
    
          :page-size="100"
          layout="prev, pager, next, jumper"
          :total="1000">
        </el-pagination>
      </div>
    </div>

  </div>
</template>

<script>
import { bindBank,bankInfo, unbindBank,withdrawRecord } from "@/api/serve"
import { getTel,getToken } from "@/util"
export default {
  name: 'Withdraw',
  data () {
    return {
      recordTable: [{
        orderno: '', //流水号
        time: '', //申请时间
        money: '', //提现金额
        bank: '', //提现账户
        state: '' //状态
      }],
      limit: '1', //当前页数
      curr: '6', // 当前页多少条数
      dialogBank: false,
      lists: {
        guid: 'ssc-token', // token
        tel: 'tel', // 加密号码
        name: '', // 持卡人姓名
        bank: '', //卡号
        branch: '', //开户银
        pwd: '' // 密码
      },
      labelPosition: 'right',
      bankForm:{
        branch: '111',
        bank: '111'
      },
      bankid: '', // 解绑卡号id
      rules: {
        name: [
          { required: true, message: '请输入持卡人姓名', trigger: 'blur' },
        ],
        bank: [
          { required: true, message: '请输入卡号', trigger: 'change' },
        ],
        branch: [
          { required: true, message: '请输入开发银行', trigger: 'change' }
        ],
        pwd: [
          { required: true, message: '请输入密码', trigger: 'change' }
        ]
      }
    }
  },
  created () {
    this.lists.guid = getToken(this.lists.guid)
    this.lists.tel = getTel(this.lists.tel)

    // 银行卡
    this.bankInfo()

    // 提现记录
    this.record()
  },
  methods: {
      // 绑定银行卡
    bindBlankBtn () {
      this.dialogBank = true
      // console.log(this.dialogBank)
    },
    // 绑定银行卡
    bindMyBank () {
      bindBank (this.lists).then( res => {
        this.dialogBank = false
        this.$message('绑定银行卡成功')
        this.bankInfo()
      })
    },

    // 银行卡信息
    bankInfo () {
      bankInfo ({guid:this.lists.guid,tel:this.lists.tel}).then( res => {
        this.bankForm = res.data.data
        this.bankid = res.data.data.id
      }) 
    },

    // 解绑银行卡
    unbindBank () {
      this.$confirm('确定解除银行卡绑定?', '解除', {
        center: true,
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        unbindBank ({bankid: this.bankid,guid:this.lists.guid}).then( res => {
          // console.log(res)
        })
        this.$message({
          type: 'success',
          message: '解绑成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消解绑'
        });          
      });

    },

    // 提现记录
    record () {
      withdrawRecord ({guid: this.lists.guid,tel: this.lists.tel,limit: this.limit,curr: this.curr}).then( res => {
        this.recordTable = res.data.data
        // console.log(res)
      })
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
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
    width: 80px;
    margin: auto;
  }
    .icon img {
      width: 100%;
    }
  /* .icon .iconfont {
    font-size: 80px;
    color: #FEAD1C;
  } */

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
    width: 540px;
    height: 180px;
    border-radius: 4px;
    padding: 5px 20px;
    box-sizing: border-box;
    margin:20px auto;
    background: url("../../../assets/images/c-bank-bg.png") no-repeat;
    background-size: 100% 100%;
  }

  .bank-img {
    float: left;
    width: 60px;
    margin-top: 32px;
    margin-left: 26px;
    height: 60px;
    background: #fff;
    border-radius: 60px;
    line-height: 70px;
    margin-right: 20px;
  }

  .bank-img img {
    width: 100%;
  }

  .bank-type{
    float: left;
    padding: 8px 0;
    line-height: 20px;
    box-sizing: border-box;
    margin-top: 32px;
    color: #fff;
    font-size: 18px;
  }

  .c-omit-count {
    margin-right: 18px;
  }

  .c-bank-number {
    margin-top: 25px;
  }

  .c-save-share {
    display: inline-block;
    border: 2px solid #81A1D8;
    padding: 2px 10px;
    margin-left: 20px;
    box-sizing: border-box;
    border-radius: 4px;
    font-size: 13px;
  }

  .unbindBank {
    width: 120px;
    line-height: 30px;
    background: #FEAD1C;
    border-radius: 5px;
    margin: auto;
    text-align: center;
    color: #fff;
  }

  /* /deep/ .el-button--primar {
    background: #FEAD1C!important;
    color: #fff!important;
    border-color: #FEAD1C!important;
  } */

</style>