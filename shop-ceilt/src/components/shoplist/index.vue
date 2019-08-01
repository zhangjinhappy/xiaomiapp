<template>
   <div class="shoplist">
       <shop-banner/>
       <shop-infor/>
       <shop-content/>
       <h1>123445</h1>
       <shop-footer/>
   </div>
</template>
<script>
import shopBanner from './banner'
import shopInfor from './info'
import shopContent from './content'
import shopFooter from './footer'
export default {
  components:{
   shopBanner,
   shopInfor,
   shopContent,
   shopFooter
  }
}
</script>
<style lang="less" scoped>

</style>
