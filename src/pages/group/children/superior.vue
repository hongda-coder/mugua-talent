<template>
  <div class="subordinate clearfix">
    <div class="wrap">
      <div class="avatar"><img src="@/assets/images/c-avatar.png" alt=""></div>
      <div class="contact-people">
        {{lists.name}}
      <span class="level"><img src="@/assets/images/c-level.png" alt=""></span>
      </div>
      <div class="contact-way">联系方式： {{lists.contact}}</div>
    </div>
  </div>
</template>

<script>

import { superior } from "@/api/serve"
import { getToken } from "@/api/cookie"
import { getTel } from "@/util"
export default {
  name: 'Subordinate',
  data () {
    return {
      lists: {
          name: '陈小姐',
          contact: "65454598651+6"
        },
      form: {
        guid: '',
        tel: 'tel'
      }
    }
  },
  created () {
    this.form.guid = getToken()
    this.form.tel = getTel(this.form.tel)
    this.getSuperiorInfo()
  },
  methods: {
    getSuperiorInfo () {
      superior (this.form).then( res => {
        // console.log(res)
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

</style>