<template>
  <div>
    <div v-show="!check">
      <ul class="tab clearfix">
      <li class="item" :class="{current: num == 1}" v-on:click="change(1)">分享情况</li>
      <li class="item" :class="{current: num == 2}" v-on:click="change(2)">竞聘情况</li>
      </ul>
      <div class="content">
        <ShareTable v-show="num == 1"></ShareTable>
        <CompeteTable v-show="num == 2"></CompeteTable>
      </div>
    </div>

    <div v-show="check">
      <Apply v-show="apply"></Apply>
      <Browse v-show="!apply"></Browse>
    </div>
  </div>
</template>

<script>
import ShareTable from './children/ShareTable'
import CompeteTable from './children/CompeteTable'
import Apply from './children/Apply'
import Browse from './children/Browse'
export default {
  name: 'Recommend',
  components: {
    ShareTable,
    CompeteTable,
    Apply,
    Browse
  },
  data() {
    return {
      num: 1,
      check: true,
      apply:false
    }
  },
  methods: {
    change (index) {
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