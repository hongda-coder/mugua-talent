<template>
  <div>
    <CommeInfo></CommeInfo>
    <PersonalInfo style="margin-top:20px;padding-right: 10px;" />
  </div>
</template>

<script>
import CommeInfo from '@/components/common/CommeInfo'
import PersonalInfo from '@/components/common/PersonalInfo'
export default {
  name: 'Personal',
  components: {
    CommeInfo,
    PersonalInfo
  }
}
</script>

<style scoped>

</style>