<template>

<div>
  <div v-show="!isJob">
    <ul class="tab clearfix">
      <li class="item" :class="{current: num == 1}" v-on:click="change(1)">悬赏任务</li>
      <li class="item" :class="{current: num == 2}" v-on:click="change(2)">我的任务</li>
    </ul>
    <div class="content">
      <RewardTask v-show="num == 1"></RewardTask>
      <MyTask v-show="num == 2" @closeDialog="closeDialog" @goDetails="goDetails"></MyTask>
    </div>
  </div>

  <div v-show="isJob">
    <JobDetails></JobDetails>
  </div>
</div>

</template>

<script>
import RewardTask from './children/RewardTask'
import MyTask from './children/MyTask'
import JobDetails from './children/JobDetails'
export default {
  name: 'Task',
  components: {
    RewardTask,
    MyTask,
    JobDetails
  },
  data() {
    return {
      num: 1,
      isJob: false
    }
  },
  methods: {
    change: function(index) {
      this.num = index
    },
    closeDialog (valNumber) {
      this.$router.go(0)
      this.num = valNumber
      console.log(this.num)
    },
    goDetails (check) {
      this.isJob = check
      // console.log(check)
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