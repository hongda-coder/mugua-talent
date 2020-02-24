<template>
  <div class="subordinate clearfix">
    <div class="wrap" v-for="(item, index) in lists" :key="index">
      <div class="avatar"><img src="@/assets/images/c-avatar.png" alt=""></div>
      <div class="contact-people">
        {{item.name}}
      <span class="level"><img src="@/assets/images/c-level.png" alt=""></span>
      </div>
      <div class="contact-way">联系方式： {{item.contact}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Subordinate',
  data () {
    return {
      lists: [
        {
          name: '陈小姐',
          contact: "65454598651+6"
        }
      ]
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