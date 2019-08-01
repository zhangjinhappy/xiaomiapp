<template>
  <div class="footer">
     {{$store.state.cartPage.checklist4}}
       <div class="box-flex">
           <div class="price-box">
              <span >共4件 金额：</span>
               <br/>
              <strong >{{total}}</strong>
              <span >元</span>
            </div>
            <a  class="disable" @click="shop">继续购物</a>
            <a class="btn flex">去结算</a>
       </div>
  </div>
</template>
<script>
export default {
  computed:{
     total(){
         var alltotal=0
       this.$store.state.cartPage.checklist4.forEach(element => {
          element= JSON.parse(element)
          alltotal= alltotal+ element.shop_newprice*element.shop_number
       });
      return alltotal
     }
  },
   methods:{
     shop(){
       this.$router.push({name:"home"})
     }
   }
}
</script>
<style lang="less" scoped>
 .footer{
    width: 100%;
    position: fixed;
    bottom: 0;
     .box-flex{
        display: flex;
        flex: 1 1 auto;
       .price-box{
            font-size: .26rem;
            color: #999;
            width: 100%;
            text-align: center;
            background-color: #e8e4e4f2;
            padding-top: .15rem;
            strong{
              font-size: .4rem;
              color: #ff5722;
              margin-right: .2em;
            }
       }
       .disable{
            background: #f4f4f4;
            border: 1px solid #f4f4f4;
            color: #333;
            display: block;
            width: 100%;
            outline: 0;
            text-align: center;
            height: 1rem;
            line-height: 1rem;
            font-size: .28rem;
            flex: 1 1 auto;
        }
        .btn{
              display: block;
              outline: 0;
              background: #ff6700;
              color: #fff;
              text-align: center;
              width: 100%;
              height: 1rem;
              line-height: 1rem;
              font-size: .28rem;
              flex: 1 1 auto;
        }
     }
 }
</style>


