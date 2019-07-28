<template>
  <div class="header-top">
      <div class="inputTxt">
           <yd-search v-model="value" :on-submit="submitHandler" placeholder="搜索商品名称"></yd-search>
      </div>
      <yd-icon name="ucenter-outline" slot="icon" size="0.54rem"></yd-icon>
  </div>
</template>
<script>

export default {
  data(){
    return{
       value:""
    }
  },
  methods:{
    submitHandler(value) {
         console.log(value)
          this.$dialog.toast({mes: `搜索商品名称：${value}`});
     },
     cancal(value){
       console.log(value)
       this.value = ''
     }
  }
}
</script>
<style lang="less" scoped>
.header-top{
   position: fixed;
   padding:0.1rem 0.1rem;
   background-color: #EFEFF4;
   top:0;
   z-index: 999;
   width: 100%;
   display: flex;
   align-items: center;
   .inputTxt{
     width: 100%;
   }
}
</style>
