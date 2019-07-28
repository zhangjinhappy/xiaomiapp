<template>
   <div class="headerbar">
      <yd-navbar :title="title" fixed>
          <router-link to="#" slot="left">
              <yd-navbar-back-icon></yd-navbar-back-icon>
          </router-link>
          <router-link to="#" slot="right">
              <yd-icon name="ucenter-outline" size="25px" color="#777"></yd-icon>
          </router-link>
      </yd-navbar>
   </div>
</template>
<script>
export default {
    data(){
      return{

      }
    },
    props:{
      title:String
    }
}
</script>
<style lang="less" scoped>

</style>


