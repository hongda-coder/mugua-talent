<template>
  <div>
    <CommeInfo></CommeInfo>
    <PhoneInfo></PhoneInfo>
  </div>
</template>

<script>
import CommeInfo from '@/components/common/CommeInfo'
import PhoneInfo from './children/PhoneInfo'
export default {
  name: 'Safety',
  components: {
    CommeInfo,
    PhoneInfo
  }
}
</script>

<style scoped>

</style>