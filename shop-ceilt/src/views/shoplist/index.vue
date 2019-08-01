<template>
   <div class="shoplist">
     <shop-index/>
   </div>
</template>
<script>
import shopIndex from '@/components/shoplist/index.vue'
export default {
  created(){
    console.log(this.$route.params.sid)
  },
  components:{
   shopIndex
  }
}
</script>
<style lang="less" scoped>
 .shoplist{
   padding-bottom: 1rem
 }
</style>
