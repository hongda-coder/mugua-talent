<template>
  <div class="subordinate clearfix">
    <el-row :gutter="10">
      <el-col :xs="12" :sm="8" :md="8" :lg="6" :xl="4" class="xl-5"  v-for="(item, index) in lists" :key="index">
      <div class="wrap" >
          <div class="avatar"><img src="@/assets/images/c-avatar.png" alt=""></div>
          <div class="contact-people">
            {{item.name}}
          <span class="level"><img src="@/assets/images/c-level.png" alt=""></span>
          </div>
          <div class="contact-way">联系方式： {{item.contact}}</div>
        </div>
      </el-col>
    </el-row>

  </div>
</template>

<script>

import { subordinate } from "@/api/serve"
import { getToken } from "@/api/cookie"
import { getTel } from "@/util"
export default {
  name: 'Subordinate',
  data () {
    return {
      lists: [
        {
          name: '陈小姐',
          contact: "65454598651+6"
        }
      ],
      form: {
        guid: '',
        tel: 'tel'
      }
    }
  },
  created () {
    this.form.guid = getToken()
    this.form.tel = getTel(this.form.tel)
    this.getSubordinateInfo()
  },
  methods: {
    getSubordinateInfo () {
      subordinate (this.form).then( res => {
        console.log(res)
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


</style>