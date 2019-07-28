<template>
  <div class="list">
      <yd-grids-group :rows="3">
        <yd-grids-item v-for="item in list" :key = item.id>
            <img slot="icon" :src="item.imgicon">
            <span slot="text">{{item.text}}</span>
        </yd-grids-item>
    </yd-grids-group>
  </div>
</template>
<script>
export default {
   data(){
     return{
       list:[{id:1,imgicon:"http://img1.imgtn.bdimg.com/it/u=1985596954,1988334747&fm=26&gp=0.jpg",text:"小米"},
             {id:2,imgicon:"http://img0.imgtn.bdimg.com/it/u=1716362667,3924825181&fm=26&gp=0.jpg",text:"苹果"},
             {id:3,imgicon:"http://img2.imgtn.bdimg.com/it/u=2049631317,3752921259&fm=26&gp=0.jpg",text:"华为"},
             {id:4,imgicon:"http://img5.imgtn.bdimg.com/it/u=266177737,194286784&fm=26&gp=0.jpg",text:"三星"},
             {id:5,imgicon:"https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3236592562,4115257292&fm=58",text:"vivo"},
             {id:6,imgicon:"https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=4085020387,3670622327&fm=58",text:"oppo"},
      ]
     }
   },
  components:{

  }
}
</script>
<style lang="less" scoped>
.yd-grids-item{
  background-color: rgba(239, 239, 244,0.2)
}
</style>

