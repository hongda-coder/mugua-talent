<template>
  <div>
    <div class="c-people-title clearfix">
      <div class="c-info-name">最新分享情况</div>
      <div class="c-info-editor" @click="goMore">更多</div>
    </div>
    <div class="table-wrap">
      <el-table :data="table" height="250" border :row-style="{height: '34px',padding: '0px',lineHeight: '34px'}" :cell-style="{ padding: '0'}"
        :header-cell-style="{background: '#F1F5FE',padding: '0px',lineHeight: '40px'}">
        <af-table-column prop="id" label="编号" align="center" width="70px">
        <template slot-scope="scope">
            {{scope.$index+1}}
        </template>
        </af-table-column>
        <af-table-column prop="cname" label="所属企业" align="center"></af-table-column>
        <af-table-column prop="jobname" label="职位名称" align="center"></af-table-column>
        <af-table-column prop="address" label="工作地点" align="center"></af-table-column>
        <af-table-column prop="record" label="工作经验" align="center"></af-table-column>
        <af-table-column prop="jpetime" label="学历要求" align="center"></af-table-column>
        <af-table-column prop="mstime" label="竞聘结束日期" align="center"></af-table-column>
        <af-table-column prop="start_data" label="面试时间" align="center"></af-table-column>
        <af-table-column prop="number" label="浏览人数" align="center"></af-table-column>
        <af-table-column prop="state" label="竞聘状态" align="center">
          <template slot-scope="scope">
            <div :class="scope.row.state | addclassStatus">
              <span style="margin-right: 5px;"><i class="iconfont" :class="scope.row.state | iconType"></i></span>
              <span>{{scope.row.state}}</span>
            </div>
          </template>
        </af-table-column>
        <af-table-column prop="name" label="操作" align="center" width="150">
          <template slot-scope="scope">
            <el-button type="text" size="small" class="commonColor" @click="goOut(scope.$index,scope.row)">查看</el-button>
          </template>
        </af-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>

import { shareList } from "@/api/serve"
import { getTel, getToken } from "@/util"

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
        number: '',
        state: '',
        href: ''
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
    shareList () {
      shareList(this.lists).then( res => {
        if(res.Message == "-2") {
          this.$router.push("login")
        }
        this.table = res.data.data
      })
    },

    goMore () {
      this.$router.push('recommend')
    },
    // 查看
    goOut (row) {
      this.$router.push({name: 'apply', query: {msid:this.table[row].msid}})
    },
    
  }
}
</script>

<style scoped>

.table-wrap {
  padding: 20px 10px;
  background: #fff;
}

.c-people-title {
  border-bottom: 1px solid #EEEEEE;
  background: #fff;
}

.c-info-name {
  float: left;
  line-height: 46px;
  font-size: 15px;
  margin-left: 10px;
}

.c-info-editor {
  float: right;
  line-height: 46px;
  font-size: 15px;
  margin-right: 20px;
  color: #FEB12C;
  cursor: pointer;
}

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

/*状态 */
.StatusTypeColorA {
  color: #FF6002; /* 待面试*/
}

.StatusTypeColorB {
  color: #FEAD1D;  /* 面试中*/
}

.StatusTypeColorC{
  color: #0FD286;  /* 已完成*/
}

.StatusTypeColorD {
  color: #FE0000;  /* 竞聘中*/
}
.StatusTypeColorE {
  color: #959595;  /* 已取消*/
}

</style>