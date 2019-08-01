<template>
   <div class="infor">
          <div class="title" style="padding: 15px 15px 5px 19px;color:#777">
             {{list.shop_title}}
          </div>
           <div class="shop-body">
              <div class="body-r">
                  <h1 :style="{'font-size':'15px','font-weight':'600','color':'#FD5C63','margin':'5px'}">
                      {{list.shop_newprice}} <span class="xbq">分享</span>
                  </h1>
                  <span :style="{'font-size':'12px','margin':'6px'}">价格:<del>{{list.shop_oldprice}}</del>元</span>
              </div>
              <div class="body-l">
                  <yd-icon name="share1" size="20px"></yd-icon>
                  <div :style="{'font-size':'12px',}">分享赚钱</div>
              </div>
        </div>
        <div class="shop-body">
                <span style="color:#333333;font-size:12px;margin-left: 6px;padding: 0px 15px 6px 0;">邮费：<i
                        style="color:#F5A623;font-size:12px">免邮费</i></span>
                <div class="line-r" style="font-size:12px">
                    月销量&nbsp;{{list.shop_mai}}
                </div>
                <span style="color:#333333;font-size:12px">{{list.shop_cite}}积分</span>
        </div>
        <div class="shop-body"  style="margin: 10px 0;display: block;">
            <div style="margin: 1px 0 10px 0;font-size:12px">推广 <span class="fw xbq">分享可赚取{{list.shop_cite}}积分</span>
            </div>
           <div style="margin: 10px 0 5px 0;font-size:12px">服务 <span class="fw">无忧退货 7天无理由 公益宝贝</span></div>
        </div>
   </div>
</template>
<script>
export default {
  computed:{
   list(){
     return this.$store.state.DetailPage.detail
   }
 }
}
</script>
<style lang="less" scoped>
 .title{
     padding: 5px 15px;
        background-color: #FFFFFF;
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #333333;
        letter-spacing: 0;
        font-weight: 600;
 }
 .xbq {
        font-size: 12px;
        background-color: antiquewhite;
        padding: 2px 6px;
        border-radius: 10px;
        font-weight: 100;
        color: #fd5c63;
    }
    .shop-body {
        background-color: #FFFFFF;
        padding: 5px 15px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #999999
    }
    .fw {
        margin-left: 10px;
        color: #656565;
    }
</style>


