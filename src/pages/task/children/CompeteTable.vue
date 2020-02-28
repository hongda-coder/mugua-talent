<template>
  <div>
    <div>
      <el-table :data="table" height="250" border :row-style="{height: '34px',padding: '0px',lineHeight: '34px'}" :cell-style="{ padding: '0'}"
        :header-cell-style="{background: '#F1F5FE',padding: '0px',lineHeight: '40px'}">
        <af-table-column prop="id" label="编号" align="center"></af-table-column>
        <af-table-column prop="cname" label="所属企业" align="center"></af-table-column>
        <af-table-column prop="jobname" label="职位名称" align="center"></af-table-column>
        <af-table-column prop="address" label="工作地点" align="center"></af-table-column>
        <af-table-column prop="working" label="工作经验" align="center"></af-table-column>
        <af-table-column prop="record" label="学历要求" align="center"></af-table-column>
        <af-table-column prop="mstime" label="竞聘结束日期" align="center"></af-table-column>
        <af-table-column prop="jpetime" label="面试时间" align="center"></af-table-column>
        <af-table-column prop="aiMoenyOutside" label="到场所获佣金" align="center"></af-table-column>
        <af-table-column prop="rdMoenyOutside" label="面过所获佣金" align="center"></af-table-column>
        <af-table-column prop="name" label="操作" align="center">
          <template slot-scope="scope" width="180">
            <el-button @click.native.prevent="deleteRow(scope.$index, tableData4)" type="text" size="small"  class="commonColor">分享</el-button>
              <span class="commonColor" style="margin: 0 5px;font-size: 12px;">|</span>
              <el-button @click.native.prevent="deleteRow(scope.$index, tableData4)" type="text" size="small"  class="commonColor">领任务</el-button>
              <span class="commonColor" style="margin: 0 5px;font-size: 12px;">|</span>
            <el-button @click.native.prevent="deleteRow(scope.$index, tableData4)" type="text" size="small"  class="commonColor">查看</el-button>
          </template>
        </af-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { jobList } from "@/api/serve"
import { getToken } from "@/api/cookie"
import { getTel } from "@/util"
export default {
  name: 'CompeteTable',
  data () {
    return {
      table: [{
        id: '',
        cname: "",
        jobname: "",
        address: '',
        working: '',
        record: '',
        mstime: '',
        jpetime: '',
        aiMoenyOutside: '',
        rdMoenyOutside: '',
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
    this.jobList()
  },
  methods: {
    jobList () {
      this.lists.Guid = getToken()
      this.lists.Tel = getTel(this.lists.Tel)
      jobList(this.lists).then( res => {
        this.table = res.data.data
      })
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

</style>