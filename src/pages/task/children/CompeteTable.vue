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
        <af-table-column prop="aiMoenyOutside" label="到场所获佣金" align="center"  width="130">
          <template slot-scope="scope">
            ￥{{scope.row.aiMoenyOutside}}
          </template>
        </af-table-column>
        <af-table-column prop="rdMoenyOutside" label="面过所获佣金" align="center" width="130">
            <template slot-scope="scope">
            ￥{{scope.row.rdMoenyOutside}}
          </template>
        </af-table-column>
        <af-table-column prop="name" label="操作" align="center">
          <template slot-scope="scope" width="180">
            <el-button type="text" size="small"  class="commonColor" @click="share(scope.$index,scope.row)">分享</el-button>
              <span class="commonColor" style="margin: 0 5px;font-size: 12px;">|</span>
              <el-button type="text" size="small" @click="getTask(scope.$index,scope.row)"  class="commonColor">领任务</el-button>
              <span class="commonColor" style="margin: 0 5px;font-size: 12px;">|</span>
            <el-button type="text" size="small"  class="commonColor">查看</el-button>
          </template>
        </af-table-column>
      </el-table>
    </div>
        <!-- 分享 -->
    <el-dialog
      title="提示"
      :visible.sync="dialogShare"
      width="30%"
      >
      <div class="share"><input type="text" v-model="vshareConfig.share[0].bdUrl"></div>
      <vshare :vshareConfig="vshareConfig"></vshare>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogShare = false">取 消</el-button>
        <el-button type="primary" @click="dialogShare = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { jobList,getTask, shareJob } from "@/api/serve"
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
        msid: ''
      }],
      lists: {
        guid: '', //token
        tel: 'tel',  // 加密得电话号码
        limit: '1' , // 当前页
        curr: '5' //当前页多少数据
      },
      dialogShare: false, // 分享
      vshareConfig: {
        shareList: [ 'more','qzone','tsina','tqq','renren','weixin'],
        common : {
          //此处放置通用设置
        },
        share: [{ bdUrl: '' }],
        tableIndex: ''
      }
    }
  },
  created () {
    this.jobList()
  },
  methods: {
    jobList () {
      this.lists.guid = getToken()
      this.lists.tel = getTel(this.lists.tel)
      jobList(this.lists).then( res => {
        this.table = res.data.data
        console.log(res)
      })
    },
    // 领任务
    getTask (row) {
      getTask ({guid:this.lists.guid,tel:this.lists.tel,msid: this.table[row].msid}).then( res => {
        console.log(res)
      })
    },
    // 分享
    share (row, column) {
      this.dialogShare = true
      shareJob ({msid:this.table[row].msid,guid:this.lists.guid,tel:this.lists.tel}).then( res => {
        this.vshareConfig.share[0].bdUrl= res.data.data.urlpath
        console.log(this.vshareConfig.share[0].bdUrl)
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