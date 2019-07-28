<template>
   <div class="logo">
      <users></users>
       <yd-cell-group>
            <yd-cell-item>
                <yd-input slot="right" class="input" ref="phone" required v-model="input1" regex="mobile" placeholder="手机号"></yd-input>
            </yd-cell-item>
            <yd-cell-item>
                <yd-input slot="right" class="input" ref="pwd" type="password" v-model="input2" max="20" min="6" placeholder="密码"></yd-input>
            </yd-cell-item>
        </yd-cell-group>
        <yd-button-group>
            <yd-button size="large" type="primary" bgcolor="#f37d0f" color="#fff" shape="circle" @click.native="clickname">登录</yd-button>
        </yd-button-group>
         <div class="user">
          <a href="/regisrer">没有账号？注册</a>
        </div>
   </div>
</template>
<script>
import users from '@/components/enter/userheader.vue'
export default {
     data(){
       return{
          input1:'',
          input2:""
       }
     },
     methods:{
       clickname(){

       }
     },
    beforeRouteEnter (to, from, next) {
        next(vm =>{
           vm.$parent.$data.showfooter=false
        })
    },
   beforeRouteLeave (to, from, next) {
            this.$parent.$data.showfooter=true
           next()
    },
   components:{
     users
   }
}
</script>
<style lang="less" scoped>
 .user{
    position: fixed;
    bottom:1rem;
    left:0px;
    text-align: center;
    width: 100%;
    color: #ccc;
    a{
      font-size: .3rem;
      color:#000;
    }
  }
  .input{
      padding-left: .2rem;
    }
</style>
