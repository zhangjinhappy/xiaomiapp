<template>
    <yd-slider  autoplay="3000" >
        <yd-slider-item v-for="(item,i) in list" :key="i">
            <a>
                <img :src="item">
            </a>
        </yd-slider-item>
    </yd-slider>
</template>
<script>
export default {
    computed:{
      list(){
        return this.$store.state.DetailPage.detailSider
      }
   },
    data(){
      return{

      }
    },
  components:{

  }
}
</script>
<style lang="less" scoped>
//
// pagination-color="#FF0000"
</style>
