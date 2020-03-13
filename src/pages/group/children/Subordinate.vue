<template>
<div>
  <div v-show="lists.length > 0"  class="subordinate clearfix">
    <el-row :gutter="10">
      <el-col :xs="12" :sm="8" :md="8" :lg="6" :xl="4" class="xl-5" v-for="(item, index) in lists" :key="index">
        <div class="wrap" >
          <div class="avatar"><img src="@/assets/images/c-avatar.png" alt=""></div>
          <div class="contact-people">
            {{item.TrueName}}
          <span class="level"><img src="@/assets/images/c-level.png" alt=""></span>
          </div>
          <div class="contact-way">联系方式： {{item.tel}}</div>
        </div>
      </el-col>
    </el-row>
  </div>

  <div v-show="lists.length == 0" style="background: #fff;">
    <div class="wrap-big-samll">
      <div class="no-my-big-samll"><img src="@/assets/images/no-my-big-small.png" alt=""></div>
      <div>暂无下级</div>
    </div>
  </div>
</div>

</template>

<script>

import { subordinate } from "@/api/serve"
import { getTel,getToken } from "@/util"
export default {
  name: 'Subordinate',
  data () {
    return {
      lists:[{
          TrueName: '',
          tel: ""
        }],
      form: {
        guid: 'ssc-token',
        tel: 'tel'
      }
    }
  },
  mounted () {
    this.form.guid = getToken(this.form.guid)
    this.form.tel = getTel(this.form.tel)
    this.getSubordinateInfo()
  },
  methods: {
    getSubordinateInfo () {
      subordinate (this.form).then( res => {
        this.lists = res.data.data
      }) 
    }
  }
}
</script>

<style scoped>

@media screen and (min-width: 1600px) {
    .xl-5 {
      width: 20%;
    }
}

.wrap {
  /* width: 326px; */
  margin-bottom: 20px;
  box-sizing: border-box;
  background: #fff;
  padding: 20px 0;
}

.contact-people, .contact-way{
  text-align: center;
}
.contact-people, .contact-way{
  line-height: 25px;
  font-size: 14px;
}

.contact-people .level {
  display: inline-block;
  width: 30px;
  margin-left: 10px;
}

.avatar  {
  width: 48px;
  margin: auto;
}
.avatar img {
  width: 100%;
}

.wrap-big-samll {
  padding: 50px 0;
  width: 250px;
  margin: auto;
  text-align: center;
  color: #777;
}

.no-my-big-samll {
  widows: 250px;
}

.no-my-big-samll img {
  width: 100%;
}

</style>