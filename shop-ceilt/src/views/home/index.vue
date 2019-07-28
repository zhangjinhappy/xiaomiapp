<template>
  <div class="home">
      <Navbar/>
     <sider/>
  </div>
</template>
<script>
import Navbar from '@/components/home/Headerbar.vue'
import sider from '@/components/home/index.vue'
export default {
    data(){
      return{
         title:"首页"
      }
    },
    components:{
      Navbar,
      sider
    }
}
</script>
<style lang="less" scoped>
 .home{
   padding-top: 1rem;
   padding-bottom: 1rem
 }
</style>


