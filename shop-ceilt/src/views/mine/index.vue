<template>
  <div class="mine">
    <users></users>
    <mine-index/>
  </div>
</template>
<script>
import users from '@/components/enter/userheader.vue'
import mineIndex from '@/components/mine/index.vue'
export default {
     data(){
      return{
         title:"个人中心"
      }
    },
    components:{
      users,
      mineIndex
    }
}
</script>
<style lang="less" scoped>
 .mine{
   padding-bottom: 1.5rem;
 }
</style>
