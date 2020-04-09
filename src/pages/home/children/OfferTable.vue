<template>
  <div>
    <div class="c-people-title clearfix">
      <div class="c-info-name">最新悬赏任务</div>
      <div class="c-info-editor" @click="goTask">更多</div>
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
        <af-table-column prop="name" label="操作" align="center" width="170">
          <template slot-scope="scope">
            <el-button type="text" size="small" class="commonColor" @click="share(scope.$index,scope.row)">分享</el-button>
            <span class="commonColor" style="margin: 0 5px;font-size: 12px;">|</span>
            <el-button  type="text" size="small" :class="scope.row.state | addclassStatus" @click="getTask(scope.$index,scope.row)" :disabled="scope.row.state | isClick">{{scope.row.state | taskState}}</el-button>
            <span class="commonColor" style="margin: 0 5px;font-size: 12px;">|</span>
            <el-button type="text" size="small" class="commonColor" @click="goOut(scope.$index,scope.row)">查看</el-button>
          </template>
        </af-table-column>
      </el-table>
    </div>

    <!-- 分享 -->
    <el-dialog
      title="提示"
      :visible.sync="shareTalbe"
      width="30%"
      @close='closeDialog'
      >
      <JobShare></JobShare>
    </el-dialog>
  </div>
</template>

<script>
import JobShare from '@/components/common/JobShare'
import { jobList,shareJob, getTask, competeList } from "@/api/serve"
import { getTel,getToken } from "@/util"
export default {
  name: 'OfferTable',
  inject:['reload'], 
  components: {
    JobShare
  },
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
        msid: '', // 分享id
        state: '',
        href:''
      }],
      lists: {
        guid: 'ssc-token', //token
        tel: 'tel',  // 加密得电话号码
        limit: '1' , // 当前页
        curr: '5' //当前页多少数据
      },
      shareTalbe: false, // 分享弹出层
      tableIndex: '',
      disabled: false
    }
  },
  mounted () {
    this.lists.guid = getToken(this.lists.guid)
    this.lists.tel = getTel(this.lists.tel)
    this.jobList()
    // this.keyup()
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
    jobList (index) {
      jobList(this.lists).then( res => {
        if(res.Message == "-2") {
          this.$router.push("login")
        }
        this.table = res.data.data
      })
    },
    // 分享
    share (row, column) {
      shareJob ({msid:this.table[row].msid,guid:this.lists.guid,tel:this.lists.tel}).then( res => {
        if(res.Message == "-2") {
          this.$router.push("login")
        }
        this.$nextTick(() => {
          console.log(this.$store.state.shareUrl)
          this.$store.commit('SAVE_SHARE',res.data.data.urlpath)
          console.log(this.$store.state.shareUrl)
        })
        this.shareTalbe = true
      })
    },

    closeDialog () {
      this.$store.commit('SAVE_SHARE','')
    },
     // 领任务
    getTask (row, column) {
      getTask({tel: this.lists.tel,guid: this.lists.guid,msid: this.table[row].msid}).then( res => {
        if (res.data.Message = 'success') {
          this.jobList()
          // this.winReload()
          this.disabled = true
          // this.$alert('领取任务成功', {
          //   confirmButtonText: '确定',
          //   center: true,
          //   callback: action => {
          //     this.$message({
          //       type: 'info',
          //       message: `action: ${ action }`
          //     })
          //   }
          // })
        }
      })
    },
    // 跳转到更多
    goTask  () {
      this.$router.push('task')
    },
    // 跳到外部  查看
    goOut (row) {
      this.$router.push({name: 'details', query: {msid:this.table[row].msid}})
      this.$store.commit('SAVE_TASK',this.checkTask)
      this.$store.commit('SAVE_ID',this.table[row].msid)
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

.share input{
  width: 300px;
}

.StatusTypeColorA {
  color: #FEAD1C;
}

.StatusTypeColorB {
  color: #959595;
}
</style>