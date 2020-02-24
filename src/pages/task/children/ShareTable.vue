<template>
  <div>

    <div class="search-form">
      <!-- <el-row>
        <el-form :inline="true" label-width="80px">
          <el-col class="card" :xs="24" :sm="24" :md="12" :lg="8" :xl="7">
            <el-form-item label="区域筛选" style="width: 380px;">
                <el-cascader placeholder="选择区域"  style="width: 280px;" :options="cities" filterable separator=""></el-cascader>
            </el-form-item>
          </el-col>

          <el-col class="card" :xs="24" :sm="24" :md="12" :lg="8" :xl="7">
            <el-form-item label="行业筛选"  style="width: 380px;">
              <el-cascader placeholder="选择行业"  style="width: 280px;" :options="guilds" filterable separator=""></el-cascader>
            </el-form-item>
          </el-col>

          <el-col class="card" :xs="24" :sm="24" :md="12" :lg="8" :xl="7">
            <el-form-item label="职位筛选"  style="width: 380px;">
              <el-cascader placeholder="选择职位"  style="width: 280px;" :options="options" filterable separator=""></el-cascader>
            </el-form-item>
          </el-col>
        </el-form>
      </el-row> -->
    </div>
    <div>
      <el-table :data="table" height="250" border :row-style="{height: '34px',padding: '0px',lineHeight: '34px'}" :cell-style="{ padding: '0'}"
        :header-cell-style="{background: '#F1F5FE',padding: '0px',lineHeight: '40px'}">
        <af-table-column prop="number" label="编号" align="center"></af-table-column>
        <af-table-column prop="guild" label="所属企业" align="center"></af-table-column>
        <af-table-column prop="name" label="职位名称" align="center"></af-table-column>
        <af-table-column prop="address" label="工作地点" align="center"></af-table-column>
        <af-table-column prop="experience" label="工作经验" align="center"></af-table-column>
        <af-table-column prop="education" label="学历要求" align="center"></af-table-column>
        <af-table-column prop="end_data" label="竞聘结束日期" align="center"></af-table-column>
        <af-table-column prop="start_data" label="面试时间" align="center"></af-table-column>
        <af-table-column prop="commission1" label="人数" align="center"></af-table-column>
        <af-table-column prop="commission2" label="竞聘状态" align="center"></af-table-column>
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
export default {
  name: 'ShareTable',
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
        }, {
          number:1,
          guild: '佛山市畅腾智能家居有限公司',
          name: '业务销售',
          address: '上海市普陀区金沙江路 1518 弄',
          experience: '3-5年',
          education: '本科',
          end_data: '2020年1月9日',
          start_data: '2020年1月10日 15:00-17:00',
          commission1: '5人',
          commission2: '面试中'
        }, {
          number:1,
          guild: '佛山市畅腾智能家居有限公司',
          name: '业务销售',
          address: '上海市普陀区金沙江路 1518 弄',
          experience: '3-5年',
          education: '本科',
          end_data: '2020年1月9日',
          start_data: '2020年1月10日 15:00-17:00',
          commission1: '5人',
          commission2: '已完成'
        }, {
          number:1,
          guild: '佛山市畅腾智能家居有限公司',
          name: '业务销售',
          address: '上海市普陀区金沙江路 1518 弄',
          experience: '3-5年',
          education: '本科',
          end_data: '2020年1月9日',
          start_data: '2020年1月10日 15:00-17:00',
          commission1: '5人',
          commission2: '竞聘中'
        }, {
          number:1,
          guild: '佛山市畅腾智能家居有限公司',
          name: '业务销售',
          address: '上海市普陀区金沙江路 1518 弄',
          experience: '3-5年',
          education: '本科',
          end_data: '2020年1月9日',
          start_data: '2020年1月10日 15:00-17:00',
          commission1: '5人',
          commission2: '竞聘中'
        }, {
          number:1,
          guild: '佛山市畅腾智能家居有限公司',
          name: '业务销售',
          address: '上海市普陀区金沙江路 1518 弄',
          experience: '3-5年',
          education: '本科',
          end_data: '2020年1月9日',
          start_data: '2020年1月10日 15:00-17:00',
          commission1: '5人',
          commission2: '竞聘中'
        },{
          number:1,
          guild: '佛山市畅腾智能家居有限公司',
          name: '业务销售',
          address: '上海市普陀区金沙江路 1518 弄',
          experience: '3-5年',
          education: '本科',
          end_data: '2020年1月9日',
          start_data: '2020年1月10日 15:00-17:00',
          commission1: '5人',
          commission2: '竞聘中'
        }],


        cities: [{
          value: 'zhinan',
          label: '广东省',
          children: [{
            value: 'guangzhoushi',
            label: '广州市',
            children: [{
              value: 'haizhiqu',
              label: '海珠区'
            }, {
              value: 'baiyunqu',
              label: '白云区'
            }, {
              value: 'yuexiuqu',
              label: '越秀区'
            }, {
              value: 'tianhequ',
              label: '天河区'
            }]
          }, {
            value: 'shenzhenshi',
            label: '深圳市',
            children: [{
              value: 'nanshanqu',
              label: '南山区'
            }, {
              value: 'baoanqu',
              label: '宝安区'
            }]
          }]
        }],
        guilds: [
          {
            value: 'zhinan',
            label: '广东省',
          }
        ]
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