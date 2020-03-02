<template>
  <div>
    <div class="c-people-title clearfix">
      <div class="c-info-name">最新分享情况</div>
      <div class="c-info-editor">更多</div>
    </div>
    <div class="table-wrap">
      <el-table :data="table" height="250" border :row-style="{height: '34px',padding: '0px',lineHeight: '34px'}" :cell-style="{ padding: '0'}"
        :header-cell-style="{background: '#F1F5FE',padding: '0px',lineHeight: '40px'}">
        <af-table-column prop="number" label="编号" align="center"></af-table-column>
        <af-table-column prop="guild" label="所属行业" align="center"></af-table-column>
        <af-table-column prop="name" label="职位名称" align="center"></af-table-column>
        <af-table-column prop="address" label="工作地点" align="center"></af-table-column>
        <af-table-column prop="experience" label="工作经验" align="center"></af-table-column>
        <af-table-column prop="education" label="学历要求" align="center"></af-table-column>
        <af-table-column prop="end_data" label="竞聘结束日期" align="center"></af-table-column>
        <af-table-column prop="start_data" label="面试时间" align="center"></af-table-column>
        <af-table-column prop="commission1" label="人数" align="center"></af-table-column>
        <af-table-column prop="commission2" label="竞聘状态" align="center"></af-table-column>
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
import { getToken } from "@/api/cookie"
import { getTel } from "@/util"

export default {
  name: 'ShareTable',
  components: {
  },
  data() {
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
      }],
      lists: {
        guid: '', //token
        tel: 'tel',  // 加密得电话号码
        limit: '1' , // 当前页
        curr: '5' //当前页多少数据
      }
    }
  },
  created () {
    this.lists.guid = getToken()
    this.lists.tel = getTel(this.lists.tel)
    this.shareList()
  },
  methods: {
    shareList () {
      shareList(this.lists).then( res => {
        // console.log(res)
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