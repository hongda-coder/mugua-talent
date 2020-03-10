<template>
  <div>
    <div class="c-people-title clearfix">
      <div class="c-info-name">最新分享情况</div>
      <div class="c-info-editor">更多</div>
    </div>
    <div class="table-wrap">
      <el-table :data="table" height="250" border :row-style="{height: '34px',padding: '0px',lineHeight: '34px'}" :cell-style="{ padding: '0'}"
        :header-cell-style="{background: '#F1F5FE',padding: '0px',lineHeight: '40px'}">
        <af-table-column prop="id" label="编号" align="center" width="70px">
        <template slot-scope="scope">
            {{scope.$index+1}}
        </template>
        </af-table-column>
        <af-table-column prop="cname" label="所属行业" align="center"></af-table-column>
        <af-table-column prop="jobname" label="职位名称" align="center"></af-table-column>
        <af-table-column prop="address" label="工作地点" align="center"></af-table-column>
        <af-table-column prop="record" label="工作经验" align="center"></af-table-column>
        <af-table-column prop="jpetime" label="学历要求" align="center"></af-table-column>
        <af-table-column prop="mstime" label="竞聘结束日期" align="center"></af-table-column>
        <af-table-column prop="start_data" label="面试时间" align="center"></af-table-column>
        <af-table-column prop="msnumber" label="人数" align="center"></af-table-column>
        <af-table-column prop="state" label="竞聘状态" align="center"></af-table-column>
        <af-table-column prop="name" label="操作" align="center" width="150">
          <template slot-scope="scope">
            <el-button @click.native.prevent="deleteRow(scope.$index, tableData4)" type="text" size="small" class="commonColor">查看</el-button>
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
  components: {
  },
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
        state: ''
      }],
      lists: {
        guid: 'ssc-token', //token
        tel: 'tel',  // 加密得电话号码
        limit: '1' , // 当前页
        curr: '5' //当前页多少数据
      }
    }
  },
  created () {
    this.lists.guid = getToken(this.lists.guid)
    this.lists.tel = getTel(this.lists.tel)
    this.shareList()
  },
  methods: {
    shareList () {
      shareList(this.lists).then( res => {
        this.table = res.data.data
        // console.log(res.data)
      })
    }
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
</style>