<template>
  <div>
    <div >
      <el-table :data="table" height="440" border :row-style="{height: '34px',padding: '0px',lineHeight: '34px'}" :cell-style="{ padding: '0'}"
        :header-cell-style="{background: '#F1F5FE',padding: '0px',lineHeight: '40px'}">
        <af-table-column prop="id" label="编号" align="center" width="70px">
        <template slot-scope="scope">
            {{scope.$index+1}}
        </template>
        </af-table-column>
        <af-table-column prop="cname" label="所属行业" align="center"></af-table-column>
        <af-table-column prop="jobname" label="职位名称" align="center"></af-table-column>
        <af-table-column prop="address" label="工作地点" align="center"></af-table-column>
        <af-table-column prop="working" label="工作经验" align="center"></af-table-column>
        <af-table-column prop="record" label="学历要求" align="center"></af-table-column>
        <af-table-column prop="jpetime" label="竞聘结束日期" align="center"></af-table-column>
        <af-table-column prop="mstime" label="面试时间" align="center"></af-table-column>
        <af-table-column prop="msnumber" label="浏览人数" align="center"></af-table-column>
        <af-table-column prop="state" label="竞聘状态" align="center" width="110">
          <template slot-scope="scope">
            <div :class="scope.row.state | addclassStatus">
              <span style="margin-right: 5px;"><i class="iconfont" :class="scope.row.state | iconType"></i></span>
              <span>{{scope.row.state}}</span>
            </div>
          </template>
        </af-table-column>
        <af-table-column prop="name" label="操作" align="center"  width="110">
          <template slot-scope="scope">
            <el-button type="text" size="small" class="commonColor" @click="goOut(scope.$index,scope.row)">查看</el-button>
          </template>
        </af-table-column>
      </el-table>
    </div>
    <!-- <div v-show="table.length==0">
      <div class="no-wrap">
        <div class="no-record"><img src="@/assets/images/no-record.png" alt=""></div>
        <div style="line-height: 80px;">暂无数据</div>
      </div>
    </div> -->
  </div>
</template>

<script>
import { shareList } from "@/api/serve"
import { getTel,getToken } from "@/util"
export default {
  name: 'ShareTable',
  data() {
    return {
      table: [{
        cname: '',
        jobname: '',
        address: '',
        working: '',
        record: '',
        jpetime: '',
        mstime: '',
        msnumber: '',
        state: '',
        href:''
      }],
      lists: {
        guid: 'ssc-token', //token
        tel: 'tel',  // 加密得电话号码
        limit: '1' , // 当前页
        curr: '5' //当前页多少数据
      }
    }
  },
  mounted () {
    this.lists.guid = getToken(this.lists.guid)
    this.lists.tel = getTel(this.lists.tel)
    this.shareList()
  },
  filters: {
    addclassStatus (value) {
      switch (value) {
        case '待面试':
          return 'StatusTypeColorA'
        case '面试中':
          return 'StatusTypeColorB'
        case '面试结束': 
          return 'StatusTypeColorC'
        case '竞聘中' :
          return 'StatusTypeColorD'
      }
    },
    iconType (value) {
      switch (value) {
        case '待面试':
          return 'icon-dingdan-daimianshi'
        case '面试中':
          return 'icon-shouye'
        case '面试结束': 
          return 'icon-jieshu'
        case '竞聘中' :
          return 'icon-sign'
      }
    }
  },
  methods: {
    shareList () {
      shareList(this.lists).then( res => {
        this.table = res.data.data
      })
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


</style>