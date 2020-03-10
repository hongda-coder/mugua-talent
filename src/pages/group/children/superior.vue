<template>


<div>
  <div  v-if="lists.name =''" class="subordinate clearfix">
    <div class="wrap">
      <div class="avatar"><img src="@/assets/images/c-avatar.png" alt=""></div>
      <div class="contact-people">
        {{lists.name}}
      <span class="level"><img src="@/assets/images/c-level.png" alt=""></span>
      </div>
      <div class="contact-way">联系方式： {{lists.contact}}</div>
    </div>
  </div>

  <div v-else style="background: #fff;">
    <div class="wrap-big-samll">
      <div class="no-my-big-samll"><img src="@/assets/images/no-my-big-small.png" alt=""></div>
      <div>暂无上级</div>
    </div>
  </div>

</div>

</template>

<script>

import { superior } from "@/api/serve"
import { getTel,getToken } from "@/util"
export default {
  name: 'Subordinate',
  data () {
    return {
      lists: {
        name: '',
        contact: ""
      },
      form: {
        guid: 'ssc-token',
        tel: 'tel'
      }
    }
  },
  created () {
    this.form.guid = getToken(this.form.guid)
    this.form.tel = getTel(this.form.tel)
    this.getSuperiorInfo()
  },
  methods: {
    getSuperiorInfo () {
      superior (this.form).then( res => {
        this.lists.name = res.data.data.TrueName
        this.lists.contact = res.data.data.tel
      }) 
    }
  }
}
</script>

<style scoped>

.wrap {
  /* width: 326px; */
  margin-bottom: 20px;
  box-sizing: border-box;
  background: #fff;
  padding: 20px 0;
}

.contact-people, .contact-way,.avatar {
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