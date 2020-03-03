<template>
  <div>
    <div class="c-people-title clearfix">
      <div class="c-info-name">最新悬赏任务</div>
      <div class="c-info-editor">更多</div>
    </div>
    <div class="table-wrap">
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
        <af-table-column prop="aiMoenyOutside" label="到场所获佣金" align="center">
          <template slot-scope="scope">
            <span>
            ￥{{scope.row.aiMoenyOutside}}
            </span>
          </template>
        </af-table-column>
        <af-table-column prop="rdMoenyOutside" label="面过所获佣金" align="center">
            <template slot-scope="scope">
            <span>
            ￥{{scope.row.rdMoenyOutside}}
            </span>
          </template>
        </af-table-column>
        <af-table-column prop="name" label="操作" align="center" width="150">
          <template slot-scope="scope">
            <el-button type="text" size="small" class="commonColor" @click="share">分享</el-button>
            <span class="commonColor" style="margin: 0 5px;font-size: 12px;">|</span>
            <el-button @click.native.prevent="deleteRow(scope.$index, tableData4)" type="text" size="small" class="commonColor">查看</el-button>
          </template>
        </af-table-column>
      </el-table>
    </div>

<vshare ></vshare>

    <!-- 分享 -->
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <vshare :vshareConfig="vshareConfig"></vshare>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>

import { jobList,shareJob } from "@/api/serve"
import { getToken } from "@/api/cookie"
import { getTel } from "@/util"

export default {
  name: 'OfferTable',
  components: {
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
        msid: 0 // 分享id
      }],
      lists: {
        guid: '', //token
        tel: 'tel',  // 加密得电话号码
        limit: '1' , // 当前页
        curr: '5' //当前页多少数据
      },
      dialogVisible: false, // 分享弹出层



       vshareConfig: {
          shareList: [
          'more', 'qzone', 'tsina', 'tqq', 'renren', 'weixin'
          ],
          common : {
            bdUrl,
          },
          share : [{
            //此处放置分享按钮设置
            }
          ],
          slide : [
            //此处放置浮窗分享设置
          ],
          image : [
            //此处放置图片分享设置
          ],
          selectShare : [
            //此处放置划词分享设置
          ]
        }

    }
  },
  created () {
    this.lists.guid = getToken()
    this.lists.tel = getTel(this.lists.tel)
    this.jobList()
  },
  methods: {
    jobList () {
      jobList(this.lists).then( res => {
        this.table = res.data.data
      })
    },

    // 分享
    share () {
      this.dialogVisible = true
      // shareJob ({msid:this.table[0].msid,guid:this.lists.guid,tel:this.lists.tel}).then( res => {
      //   console.log(res)
      // })
    },
     handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
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