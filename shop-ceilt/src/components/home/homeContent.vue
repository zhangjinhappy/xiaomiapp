<template>
  <div class="context">
    <yd-list theme="3">
        <yd-list-item v-for="(item,key) in $store.state.homePage.homelist" :key="key" @click.native="shopDetail(item.id)">
            <img slot="img" v-lazy="item.shop_img"/>
            <span slot="title">{{item.shop_title}}</span>
            <yd-list-other slot="other">
                <div class="top">
                    <span class="demo-price"><em>¥</em>{{item.shop_newprice}}</span>
                    <del class="demo-del-price">¥{{item.shop_oldprice}}</del>
                </div>
                <div class="bottom">
                    <div class="demo-active">{{item.active==1?'优惠活动':"非优惠活动"}}</div>
                    <div class="demo-you">{{item.you==0?"包邮":"非包邮"}}</div>
                </div>
            </yd-list-other>
        </yd-list-item>
    </yd-list>
  </div>
</template>
<script>
export default {
  methods:{
    shopDetail(sid){
      this.$router.push({name:"shoplist",params:{sid}})
      this.$store.dispatch("initShopDetail",sid)
    }
  }
}
</script>
<style lang="less" scoped>
.yd-list-other{
  margin-top: .1rem;
}
.bottom{
  display: flex;
  align-items: center;
  margin-top: 0.1rem;
  justify-content: space-between;
  .demo-active{
   font-size: .12rem;
   color: rgb(211, 42, 42)
  }
  .demo-you{
   font-size: .12rem;
   color: rgb(78, 107, 233)
  }
}
.top{
   .demo-price{
     font-size: .28rem;
     color: rgb(211, 42, 42);
   }
   .demo-del-price{
     padding-left: .08rem;
     margin-left: .1rem;
     font-size: .16rem;
   }
}
img{
  background-color: #ffffff;
}
</style>

