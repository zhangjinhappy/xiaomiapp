<template>
  <div class="car">
    <Navbar :title="title"/>
    <car-index/>
  </div>
</template>
<script>
import Navbar from '@/components/public/Headerbar.vue'
import carIndex from '@/components/car/index.vue'
export default {
   data(){
      return{
         title:"购物车"
      }
    },
    created(){
      this.$store.dispatch("initCar")
    },
    components:{
      Navbar,
      carIndex
    }
}
</script>
<style lang="less" scoped>
.car{
  padding: .52rem 0;
}
</style>
