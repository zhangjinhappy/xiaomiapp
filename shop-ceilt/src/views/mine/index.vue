<template>
  <div class="mine">
    <users :title="title"></users>
    <mine-index/>
  </div>
</template>
<script>
import users from '@/components/enter/userheader.vue'
import mineIndex from '@/components/mine/index.vue'
export default {
     data(){
      return{
         title:"登录/注册"
      }
    },
     created(){
      this.$store.state.appPage.showfooter = true
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
