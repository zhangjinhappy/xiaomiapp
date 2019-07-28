<template>
  <div class="sider">
      <yd-slider autoplay="3000" >
            <yd-slider-item v-for="item in list" :key="item.id">
                <a href="/home">
                    <img class="imgtext" :src="item.imgsrc"/>
                </a>
            </yd-slider-item>
      </yd-slider>
  </div>
</template>
<script>
export default {
   data(){
     return{
       list:[{id:1,imgsrc:"http://i1.mifile.cn/f/i/18/airenergy/air-1.jpg"},
              {id:2,imgsrc:"http://i1.mifile.cn/a4/xmad_15641325092231_lTBsd.jpg"},
              {id:3,imgsrc:"http://i1.mifile.cn/a4/xmad_15613002137481_tCEzx.jpg"},
              {id:4,imgsrc:"http://i1.mifile.cn/a4/xmad_15640432652864_JHTQl.jpg"},
              {id:5,imgsrc:"http://i1.mifile.cn/a4/xmad_15476942061027_STEvM.jpg"}
       ]
     }
   }

}
</script>
<style lang="less" scoped>
.sider{
  width: 100%;
  height: 4rem;
}
.imgtext{
  height: 4rem;
}
</style>

