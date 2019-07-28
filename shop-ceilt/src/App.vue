<template>
  <div id="app">

        <router-view/>
      <Tabbar v-if ="showfooter" />
      <layout :loading="$store.state.pageLoad"/>
  </div>
</template>
<script>
import layout from '@/components/public/layout.vue'
import Tabbar from '@/components/public/Footerbar.vue'
export default {
    name:'app',
    beforeMount(){
        this.$store.dispatch('initApp')
      },
      data(){
        return{
          showfooter:true
        }
      },
    components:{
       Tabbar,
       layout
    }
}
</script>

<style lang="less">

</style>
