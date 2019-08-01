<template>
  <div class="sider">
     <sider/>
     <list/>
     <img src="http://i1.mifile.cn/f/i/2019/redminote7pro/section_index_bg.jpg" alt="11">
     <div class="title">
       <span></span> <i>热们推荐</i>
     </div>
     <home-content/>
  </div>
</template>
<script>
import sider from './sider'
import list from './list'
import homeContent from './homeContent.vue'
export default {
  components:{
    sider,
    list,
    homeContent
  }
}
</script>
<style lang="less" scoped>
 .sider{
   img{
     width: 100%;
     height: 2.5rem;
   }
   .title{
     width: 100%;
     height: .8rem;
     background-color:#fff;
     display: flex;
     align-items: center;
     padding-left:.1rem ;
     span{
       display: block;
       height: .6rem;
       width: .28rem;
       background-color: rgb(33, 86, 136);
     }
     i{
       padding-left: .2rem;
       color: black;
       font-size: .30rem;
       font-weight: 700
     }
   }
 }
</style>

