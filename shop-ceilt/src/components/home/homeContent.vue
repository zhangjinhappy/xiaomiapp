<template>
  <div class="context">
    <yd-list theme="3">
        <yd-list-item >
            <img slot="img" src="//img1.shikee.com/try/2016/06/23/14381920926024616259.jpg"/>
            <span slot="title">标题111标题标题标题标题111标题标题标题标题111标题标题标题标题111标题标题标题</span>
            <yd-list-other slot="other">
                <div class="top">
                    <span class="demo-price"><em>¥</em>2344</span>
                    <del class="demo-del-price">¥3455</del>
                </div>
                <div class="bottom">
                    <div class="demo-active">优惠活动</div>
                    <div class="demo-you">包邮</div>
                </div>
            </yd-list-other>
        </yd-list-item>
    </yd-list>
  </div>
</template>
<script>
export default {
    data(){
      return{
        list:[{id:1,img: "//img1.shikee.com/try/2016/06/23/14381920926024616259.jpg", title: "标题111标题标题标题标题", price: 156.23, w_price: 89.36},
              {id:2,img: "//img1.shikee.com/try/2016/06/23/14381920926024616259.jpg", title: "标题111标题标题标题标题", price: 156.23, w_price: 89.36},
              {id:3,img: "//img1.shikee.com/try/2016/06/23/14381920926024616259.jpg", title: "标题111标题标题标题标题", price: 156.23, w_price: 89.36},
              {id:4,img: "//img1.shikee.com/try/2016/06/23/14381920926024616259.jpg", title: "标题111标题标题标题标题", price: 156.23, w_price: 89.36},
              {id:5,img: "//img1.shikee.com/try/2016/06/23/14381920926024616259.jpg", title: "标题111标题标题标题标题", price: 156.23, w_price: 89.36},
        ]
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
</style>

