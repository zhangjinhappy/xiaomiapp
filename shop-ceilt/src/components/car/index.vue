<template>
   <div class="car">
       <div class="img" v-if="showCar">
            <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2145208668,1958297527&fm=26&gp=0.jpg" alt="111">
            <h1>购物车还是空的</h1>
            <i>去逛逛</i>
       </div>
       <div class="shop">
             <yd-checklist v-model="checklist4" :label="false">
                    <yd-checklist-item val="aaa">
                        <yd-flexbox style="padding: .15rem;">
                            <img src="//img12.360buyimg.com/n1/jfs/t2122/170/1006550413/171711/de099a6f/56399d01N67907749.jpg" class="demo-checklist-img">
                            <yd-flexbox-item align="top" class="shop-content">
                                <div class="title">点击这边的内容是</div>
                                <span class="shop-message">点击这边的内容是禁止选中的</span>
                                 <div class="shop-btn">
                                         <div class="plus" @click="plusShop(i)">-</div>
                                          <div class="number">1</div>
                                          <div class="reduce" @click="reduceShop(i)">+</div>
                                 </div>
                                <div class="bottom">
                                     <span style="color:red;">单价格:￥<em>3437</em></span>
                                      <span  style="color:red"> 小计:&nbsp;343455元</span>
                                      <yd-icon name="delete" size='.42rem'></yd-icon>
                                </div>
                            </yd-flexbox-item>
                        </yd-flexbox>
                    </yd-checklist-item>
                    <yd-checklist-item val="bbb">
                        <yd-flexbox style="padding: .15rem;">
                            <img src="//img12.360buyimg.com/n1/jfs/t2122/170/1006550413/171711/de099a6f/56399d01N67907749.jpg" class="demo-checklist-img">
                            <yd-flexbox-item align="top" class="shop-content">
                                <div class="title">点击这边的内容是</div>
                                <span class="shop-message">点击这边的内容是禁止选中的</span>
                                 <div class="shop-btn">
                                         <div class="plus" @click="plusShop(i)">-</div>
                                          <div class="number">1</div>
                                          <div class="reduce" @click="reduceShop(i)">+</div>
                                 </div>
                                <div class="bottom">
                                     <span style="color:red;">单价格:￥<em>3437</em></span>
                                      <span  style="color:red"> 小计:&nbsp;343455元</span>
                                      <yd-icon name="delete" size='.42rem'></yd-icon>
                                </div>
                            </yd-flexbox-item>
                        </yd-flexbox>
                    </yd-checklist-item>
           </yd-checklist>
       </div>
   </div>
</template>
<script>
export default {
    data(){
      return{
         showCar:false,
         checklist4: []
      }
    },
    methods:{
      delectshop(){

      },
      plusShop(i){

      },
      reduceShop(i){

      }
    },
   components:{

   }
}
</script>
<style lang="less" scoped>
   .car{
     .img{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        img{
           width: 4rem;
           height: 4rem;
        }
        h1{
          font-size: .28rem;
          color: rgba(0, 0, 0, 0.87);
          font-weight: 500;
        }
        i{
          display: block;
          margin-top: .1rem;
          border: 1px solid rgba(0,0,0,.15);
          box-sizing: border-box;
          height: .5rem;
          line-height: .5rem;
          padding: 0 .24rem;
          color: rgba(0,0,0,.87);
          font-style: normal;
        }
     }
   }
   .demo-checklist-img{
     width: .9rem;
     height: .9rem;
   }
   .yd-checklist-item{
     border-bottom: 1px solid #ccc;
   }
   .shop-content{
        padding-left:.2rem;
        .title{
           padding-left: .15rem;
           white-space: onrawp;
           text-overflow: ellipsis;
           overflow: hidden;
           width: 100%;
           height: .4rem;
           font-weight: 600;
        }
        .shop-message{
           padding-left: .15rem;
           width: 100%;
           padding-top: .15rem;
           padding-bottom: .15rem;
           white-space: onrawp;
           text-overflow: ellipsis;
           overflow: hidden;
        }
        .shop-btn{
            margin: .16rem;
            display:flex;
            align-items:center;
           .plus{
               width: .59rem;
                height: .38rem;
                line-height: .38rem;
                background-color: #F5F5F5;
                box-shadow: 1px 1px 4px 1px #000;
                text-align: center;
                cursor: pointer;
           }
           .number{
             width: 40px;
             text-align: center
           }
           .reduce{
              width: .59rem;
                height: .38rem;
                line-height: .38rem;
                background-color: #F5F5F5;
                box-shadow: 1px 1px 4px 1px #000;
                text-align: center;
                cursor: pointer;
           }
        }
        .bottom{
          display: flex;
          align-items: center;
          justify-content: space-around;
        }
   }
</style>


