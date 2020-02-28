<template>
  <div>
    <ul class="tab clearfix">
      <li class="item" :class="{current: num == 1}" v-on:click="change(1)">我的下级</li>
      <li class="item" :class="{current: num == 2}" v-on:click="change(2)">我的上级</li>
    </ul>
    <div class="content">
      <Subordinate v-show="num == 1"></Subordinate>
      <superior v-show="num == 2"></superior>
    </div>
  </div>
</template>

<script>
import Subordinate from './children/Subordinate'
import superior from './children/superior'
export default {
  name: 'Task',
  components: {
    Subordinate,
    superior
  },
  data() {
    return {
      num: 1
    }
  },
  methods: {
    change: function(index) {
      this.num = index
    }
  }
}
</script>

<style scoped>
.tab {
  margin-top: 20px;
  background: #fff;
  border-bottom: 2px solid #ccc;
  margin-right: 10px;
}
 
.tab .item {
  float: left;
  width: 100px;
  cursor: pointer;
  text-align: center;
  line-height: 36px;
}
 
.current {
  color: #fff;
  background: #FEAD1D;
}

.content {
  margin-right: 10px;
  /* background: #fff; */
}
</style>