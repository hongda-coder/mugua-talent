<template>
  <div>
    <CommeInfo /> 
    <PersonalInfo style="margin-top:20px;padding-right: 10px;" />
    <OfferTable style="margin-top:20px;padding-right: 10px;" />
    <ShareTable style="margin-top:20px;padding-right: 10px;" />
    <CompeteTable style="margin-top:20px;padding-right: 10px;" />
  </div>
</template>

<script>
import CommeInfo from '@/components/common/CommeInfo'
import PersonalInfo from '@/components/common/PersonalInfo'
import OfferTable from './children/OfferTable'
import ShareTable from './children/ShareTable'
import CompeteTable from './children/CompeteTable'

export default {
  name: 'Home',
  components: {
    CommeInfo,
    PersonalInfo,
    OfferTable,
    ShareTable,
    CompeteTable
  }
}
</script>

<style scoped>

</style>