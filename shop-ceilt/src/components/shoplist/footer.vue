<template>
 <div class="footer">
     <div class=" bgw">
          <a  href="/" class="footer-btn router-link-active" >
              <yd-icon name="home-outline" size=".4rem" class="footer-icon" @click="gohome"></yd-icon>
              <span >首页</span>
          </a>
          <a class="footer-btn" @click="gocar()">
              <yd-icon name="shopcart-outline" size=".4rem" class="footer-icon" ></yd-icon>
              <span >购物车</span>
              <em>{{$store.state.cartPage.shoplist.length}}</em>
          </a>
          <div  class="action-box flex">
               <a  class="btn buy-btn" @click="addcar">加入购物车</a>
          </div>
      </div>
 </div>
</template>
<script>
export default {
   methods:{
     gocar(){
       this.$router.push({name:'car'})
     },
     gohome(){
        this.$router.push({name:'home'})
     },
     addcar(){
      var id = this.$route.params.sid
      this.$store.dispatch("addCarPage",id)
     }
   }
}
</script>
<style lang="less" scoped>
.footer{
     position: fixed;
     width: 100%;
     bottom: 0;
     padding: 0 .1rem;
    .bgw{
        background-color: rgba(225,225,225,.88);
        width: 100%;
        height: 1.04rem;
        border: 1px solid #e5e5e5;
        border-radius: .16rem;
        overflow: hidden;
        box-shadow: 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px rgba(0,0,0,.14), 0 1px 10px rgba(0,0,0,.12);
         display: flex;
        flex-wrap: nowrap;
        align-items: center;
        flex: 1;
        flex: 1 1 auto;
        .footer-btn{
            position: relative;
            display: block;
            text-decoration: none;
            width: auto;
            margin-left: .5rem;
            color: rgba(0,0,0,.54);
            .footer-icon{
              display: block;
              width: .4rem;
              height: .4rem;
              margin: 0 auto .08rem
            }
            span{
              color: rgba(0,0,0,.54);
            }
        }
    }
    .action-box{
        margin-right: .32rem;
        margin-left: .4rem;
        text-align: right;
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 auto;
        flex: 1 1 auto;
        .buy-btn{
            display: inline-block;
            width: auto;
            max-width: 4rem;
            overflow: hidden;
            padding: 0 .48rem;
            height: .64rem;
            line-height: .64rem;
            border-radius: .32rem;
            outline: 0;
            background: #ff6700;
            color: #fff;
            text-align: center;
            height: .6rem;
            line-height: .6rem;
            font-size: .28rem;
        }
    }
}
em{
      position: absolute;
    min-width: .28rem;
    line-height: .28rem;
    height: .28rem;
    box-sizing: border-box;
    padding: 0 .05rem;
    font-size: .18rem;
    overflow: hidden;
    text-align: center;
    border-radius: .28rem;
    background: #ed4d41;
    color: #fff;
    top: 0;
    left: 50%;
    -webkit-transform: translate3d(.1rem,-20%,0);
    transform: translate3d(.1rem,-20%,0);
    font-style: normal;
}
</style>


