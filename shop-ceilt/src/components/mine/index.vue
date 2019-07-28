<template>
   <div class="minetxt">
     <shop-utils/>
     <mine-list/>
     <footerList/>
   </div>
</template>
<script>
 import shopUtils from './shopUtils'
 import mineList from './mineList'
 import footerList from './footerList'
export default {
   components:{
      shopUtils,
      mineList,
      footerList
   }
}
</script>
<style lang="less" scoped>

</style>

