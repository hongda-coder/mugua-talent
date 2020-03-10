<template>
  <div>
    <ul class="tab clearfix">
      <li class="item" :class="{current: num == 1}" v-on:click="change(1)">悬赏任务</li>
      <li class="item" :class="{current: num == 2}" v-on:click="change(2)">我的任务</li>
    </ul>
    <div class="content">
      <RewardTask v-show="num == 1"></RewardTask>
      <MyTask v-show="num == 2"></MyTask>
    </div>
  </div>
</template>

<script>
import RewardTask from './children/RewardTask'
import MyTask from './children/MyTask'
export default {
  name: 'Task',
  components: {
    RewardTask,
    MyTask
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
  padding: 20px;
  margin-right: 10px;
  background: #fff;
}
</style>