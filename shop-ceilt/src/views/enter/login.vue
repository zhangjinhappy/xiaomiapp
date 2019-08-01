<template>
   <div class="logo">
      <users :title="title"></users>
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
import storage from '../../utils/storage'
export default {
     data(){
       return{
          input1:this.$store.state.UsersPage.login.input1,
          input2:this.$store.state.UsersPage.login.input2,
          title:"登录"
       }
     },
     methods:{
       clickname(){
            if(this.$refs.phone.valid && this.$refs.pwd.valid){
                 var params={
                      pwd:this.input2,
                      name:this.input1,
                   }
                 this.$axios.post({
                          url:"user/login",
                          token: this.$utils.encrypt(params)
                        },(res)=>{
                            console.log(res)
                            var list = res.data.data
                            if(list==="数据不存在"){
                              alert(list)
                            }else{
                              storage.setLocation("user",list[0])
                              this.$dialog.toast({
                                              mes:"chenggong",
                                              timeout:1500
                                          })
                                 }
                              this.$router.replace({name:'home'})
                        })
            }else{
               this.$dialog.toast({
                   mes:"bu wei kong",
                   timeout:1500
               })
            }
       }
     },
   created(){
    this.$store.state.appPage.showfooter = false
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
