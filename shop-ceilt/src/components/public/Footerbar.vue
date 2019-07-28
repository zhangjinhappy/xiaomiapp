<template>
   <div class="footbar">
        <nav class="mui-bar mui-bar-tab">
            <router-link class="mui-tab-item" to="/home">
                <span class="mui-icon">
                    <yd-icon name="home" slot="icon" size="0.54rem"></yd-icon>
                </span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link class="mui-tab-item" to="/car">
                <span class="mui-icon b">
                    <yd-icon name="shopcart" slot="icon" size="0.54rem"></yd-icon>
                </span>
                <span class="mui-tab-label">购物车</span>
            </router-link>
            <router-link class="mui-tab-item" to="/mine">
                <span class="mui-icon">
                   <yd-icon name="ucenter" slot="icon" size="0.54rem"></yd-icon>
                </span>
                <span class="mui-tab-label">我的</span>
            </router-link>
        </nav>
   </div>
</template>
<script>
export default {
   methods:{

   }
}
</script>
<style lang="less" scoped>
.mui-bar-tab {
    bottom: 0;
    display: table;
    width: 100%;
    height: .5rem;
    padding: 0;
    table-layout: fixed;
    border-top: 0;
    border-bottom: 0;
    -webkit-touch-callout: none;
}
.mui-bar {
    position: fixed;
    z-index: 10;
    right: 0;
    left: 0;
    height:.44rem;
    border-bottom: 0;
    background-color: #fff;
    background-color: #f7f7f7;
    -webkit-box-shadow: 0 0 .01rem rgba(0,0,0,.85);
    box-shadow: 0 0 .01rem rgba(0,0,0,.85);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
}
.mui-bar-tab .mui-tab-item.mui-active {
    color: #007aff;
}
.mui-bar-tab .mui-tab-item {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: .5rem;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    background-color: #fff;
    color: #929292;
}
.mui-bar-tab .mui-tab-item .mui-icon {
    top: .03rem;
    padding-top: 0;
    padding-bottom: 0;
}
.mui-bar .mui-icon {
    font-size: .24rem;
    position: relative;
    z-index: 20;
    padding-top: .1rem;
    padding-bottom: .1rem;
}
.mui-icon {
    font-family: Muiicons;
    font-size: .24rem;
    font-weight: 400;
    font-style: normal;
    line-height: 1;
    display: inline-block;
    text-decoration: none;
    -webkit-font-smoothing: antialiased;
}
.mui-bar-tab .mui-tab-item .mui-icon~.mui-tab-label {
    font-size: .11rem;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
.active{
  color: #f00 !important
}
// .mui-table{
//     display: table;
//     width: 100%;
//     table-layout: fixed;
// }
// .mui-table-cell{
//     position: relative;
//     display: table-cell;
// }
</style>
