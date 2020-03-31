<template>
  <div>
    <!-- <div class="search-form">
      <el-row>
        <el-form :inline="true" label-width="80px">
          <el-col class="card" :xs="24" :sm="24" :md="12" :lg="8" :xl="7">
            <el-form-item label="区域筛选" style="width: 380px;">
                <el-cascader placeholder="选择区域"  style="width: 280px;" :options="cities" filterable></el-cascader>
            </el-form-item>
          </el-col>
          <el-col class="card" :xs="24" :sm="24" :md="12" :lg="8" :xl="7">
            <el-form-item label="企业筛选"  style="width: 380px;">
              <el-cascader placeholder="企业行业"  style="width: 280px;" :options="guilds" filterable></el-cascader>
            </el-form-item>
          </el-col>
          <el-col class="card" :xs="24" :sm="24" :md="12" :lg="8" :xl="7">
            <el-form-item label="职位筛选"  style="width: 380px;">
              <el-cascader placeholder="选择职位"  style="width: 280px;" :options="guilds" filterable></el-cascader>
            </el-form-item>
          </el-col>
        </el-form>
      </el-row>
    </div> -->
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
        <af-table-column prop="rdMoenyOutside" label="佣金节点" align="center"  width="130"></af-table-column>
        <af-table-column prop="aiMoenyOutside" label="佣金" align="center" width="130">
            <template slot-scope="scope">
            ￥{{scope.row.aiMoenyOutside}}
          </template>
        </af-table-column>
        <af-table-column prop="name" label="操作" align="center"  width="170">
          <template slot-scope="scope" width="180">
            <el-button type="text" size="small"  class="commonColor" @click="share(scope.$index,scope.row)">分享</el-button>
            <span class="commonColor" style="margin: 0 5px;font-size: 12px;">|</span>
            <el-button  type="text" size="small" :class="scope.row.state | addclassStatus" @click="getTask(scope.$index,scope.row)" :disabled="scope.row.state | isClick">{{scope.row.state | taskState}}</el-button>
            <span class="commonColor" style="margin: 0 5px;font-size: 12px;">|</span>
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
    <!-- 分享 -->
    <el-dialog
      title="提示"
      :visible.sync="dialogShare"
      @close='closeDialog'
      width="30%"
      >
      <JobShare></JobShare>
    </el-dialog>
  </div>
</template>

<script>
import JobShare from '@/components/common/JobShare'
import { jobList, getTask, shareJob } from "@/api/serve"
import { getTel, getToken } from "@/util"
export default {
  name: 'RewardTask',
  components: {
    JobShare
  },
  data () {
    return {
      rows:1, //数据总数量
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
        msid: '',
        href:'',
        state: ''
      }],
      lists: {
        guid: 'ssc-token', //token
        tel: 'tel',  // 加密得电话号码
        limit: 1 , // 当前页
        curr: 10 //当前页多少数据
      },
      dialogShare: false, // 分享
      disabled: false,
      checkTask: true //查看详情页
    }
  },
  mounted () {
    this.lists.guid = getToken(this.lists.guid)
    this.lists.tel = getTel(this.lists.tel)
    this.jobList()
  },
  filters: {
    taskState (type) {
      switch (type) {
        case 1:
          return '领任务'
        case 2:
          return '已领任务'
        default:
          return type 
      }
    },
    addclassStatus (type) {
      switch (type) {
        case 1:
          return 'StatusTypeColorA'
        case 2:
          return 'StatusTypeColorB'
        default:
          return type 
      }
    },
    isClick (type) {
      switch (type) {
        case 1:
          return false
        case 2:
          return true
        default:
          return type 
      }
    }
  },
  methods: {
    // 页面数据
    jobList () {
      jobList(this.lists).then( res => {
        if(res.data.Message == "-2") {
          this.$router.push("login")
        }
        this.table = res.data.data
        this.rows = res.data.listcount
      })
    },

    // 分享
    share (row) {
      shareJob ({msid:this.table[row].msid,guid:this.lists.guid,tel:this.lists.tel}).then( res => {
        this.$store.commit('SAVE_SHARE',res.data.data.urlpath)
        console.log(this.$store.state.shareUrl)
        this.dialogShare = true
      })
    },
      // 分享关闭刷新
    closeDialog () {
      this.$store.commit('SAVE_SHARE','')
    },

    //领任务
    getTask (row, column) {
      getTask({tel: this.lists.tel,guid: this.lists.guid,msid: this.table[row].msid}).then( res => {
        if (res.data.Message = 'success') {
          this.disabled = true
          // this.$alert('领取任务成功', {
          //   confirmButtonText: '确定',
          //   center: true,
          //   callback: action => {
          //     this.$message({
          //       type: 'info',
          //       message: `action: ${ action }`
          //     });
          //   }
          // });
        }
      })
    },

    // 分页
    handleSizeChange(val) {
      this.lists.curr = val ||this.lists.curr;
      this.jobList();//重新调用接口
    },
    handleCurrentChange(val) {
      this.lists.limit = val ||this.lists.limit;
      this.jobList();//重新调用接口
    },

    cancelDialog () {
      this.dialogShare = false
      this.$router.go(0)
    },
    confirmDialog () {
      this.dialogShare = false
      this.$router.go(0)
    },
    
    // 跳到外部
    goOut (row) {
     this.$router.push({name: 'details', query: {msid:this.table[row].msid}})
      this.$store.commit('SAVE_TASK',this.checkTask)
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

.StatusTypeColorA {
  color: #FEAD1C;
}

.StatusTypeColorB {
  color: #959595;
}
</style>