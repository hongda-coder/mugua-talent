<template>
  <div>
    <div>
      <el-table :data="table" height="440" border :row-style="{height: '34px',padding: '0px',lineHeight: '34px'}" :cell-style="{ padding: '0'}"
        :header-cell-style="{background: '#F1F5FE',padding: '0px',lineHeight: '40px'}">
        <af-table-column prop="id" label="编号" align="center" width="70px">
        <template slot-scope="scope">
            {{scope.$index+1}}
        </template>
        </af-table-column>
        <af-table-column prop="cname" label="所属企业" align="center"></af-table-column>
        <af-table-column prop="jobname" label="职位名称" align="center"></af-table-column>
        <af-table-column prop="address" label="工作地点" align="center"></af-table-column>
        <af-table-column prop="working" label="工作经验" align="center"></af-table-column>
        <af-table-column prop="record" label="学历要求" align="center"></af-table-column>
        <af-table-column prop="jpetime" label="竞聘结束日期" align="center"></af-table-column>
        <af-table-column prop="mstime" label="面试时间" align="center"></af-table-column>
        <af-table-column prop="number" label="报名人数" align="center"></af-table-column>
        <af-table-column prop="state" label="竞聘状态" align="center">
          <template slot-scope="scope">
            <div :class="scope.row.state | addclassStatus">
              <span style="margin-right: 5px;"><i class="iconfont" :class="scope.row.state | iconType"></i></span>
              <span>{{scope.row.state}}</span>
            </div>
          </template>
        </af-table-column>
        <af-table-column prop="name" label="操作" align="center">
          <template slot-scope="scope">
            <el-button type="text" size="small" class="commonColor" @click="goOut(scope.$index,scope.row)">查看</el-button>
          </template>
        </af-table-column>
      </el-table>
    </div>
    <!-- 分页 -->
    <div class="block" style="width: 520px;margin: 15px auto;text-align: center;">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="lists.limit"
        :page-size="lists.curr"
        layout="prev, pager, next, jumper"
        :total="rows">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { competeList } from "@/api/serve"
import { getTel, getToken } from "@/util"
export default {
  name: 'CompeteTable',
  data() {
    return {
      table: [{
        cname:1,
        jobname: '',
        address: '',
        working: '',
        record: '',
        jpetime: '',
        mstime: '',
        number: '',
        state: '',
        href:''
      }],
      lists: {
        guid: 'ssc-token', //token
        tel: 'tel',  // 加密得电话号码
        limit: 1 , // 当前页
        curr: 10 //当前页多少数据
      },
      rows:1, //数据总数量
    }
  },
  mounted () {
    this.lists.guid = getToken(this.lists.guid)
    this.lists.tel = getTel(this.lists.tel)
    this.competeList()
  },
  filters: {
    // class状态
    addclassStatus (value) {
      switch (value) {
        case '待面试':
          return 'StatusTypeColorA'
        case '面试中':
          return 'StatusTypeColorB'
        case '已完成': 
          return 'StatusTypeColorC'
        case '竞聘中' :
          return 'StatusTypeColorD'
        case '已取消' :
          return 'StatusTypeColorE'
      }
    },

    iconType (value) {
      switch (value) {
        case '待面试':
          return 'icon-dingdan-daimianshi'
        case '面试中':
          return 'icon-shouye'
        case '已完成': 
          return 'icon-jieshu'
        case '竞聘中' :
          return 'icon-sign'
        case '已取消':
          return 'icon-icon_function_quxiaoxiada'
      }
    }
  },
  methods: {
    competeList () {
      competeList(this.lists).then( res => {
        console.log(res)
        if(res.data.Message == "-2") {
          this.$router.push("login")
        }
        
        this.table = res.data.data
        this.rows = res.data.listcount
      })
    },
    handleSizeChange(val) {
      console.log(val)
      this.lists.curr = val ||this.lists.curr 
      this.competeList() //重新调用接口
    },
    handleCurrentChange(val) {
      this.lists.limit = val ||this.lists.limit 
      this.competeList() //重新调用接口
    },
    goOut (row) {
      window.open(this.table[row].href,"_blank")
    }
  }
}
</script>

<style scoped>


.c-info-name::before {
  display: inline-block;
  content: '';
  width: 3px;
  height: 15px;
  background: #FEAD1C;
  margin-right: 10px;
  border-radius: 15px;
}

.commonColor {
  color: #FEAD1C;
}

.no-wrap {
  width: 280px;
  margin: 50px auto;
  text-align: center;
  color: #959595;
}

.no-record {
  width: 280px;
}


.no-record img {
  width: 100%;
}

/*状态 */
.StatusTypeColorA {
  color: #FF6002;
}

.StatusTypeColorB {
  color: #FEAD1D;
}

.StatusTypeColorC{
  color: #0FD286;
}

.StatusTypeColorD {
  color: #FE0000;
}

.StatusTypeColorE {
  color: #959595;
}
</style>