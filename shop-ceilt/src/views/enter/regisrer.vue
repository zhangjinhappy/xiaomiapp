<template>
    <div class="register">
        <users :title="title"></users>
      <yd-cell-group>
        <yd-cell-item>
            <span slot="left">昵称：</span>
            <yd-input slot="right" ref="nicname" required v-model="input1" max="20" placeholder="请输入昵称"></yd-input>
        </yd-cell-item>
        <yd-cell-item>
            <span slot="left">手机号：</span>
            <yd-input slot="right" ref="phone" v-model="input2" regex="mobile" placeholder="请输入手机号码"></yd-input>
        </yd-cell-item>
        <yd-cell-item>
            <span slot="left">密码：</span>
            <yd-input slot="right" ref="pwd" type="password" v-model="input3" placeholder="请输入密码"></yd-input>
        </yd-cell-item>
        <yd-cell-item>
            <span slot="left">再输入密码：</span>
            <yd-input slot="right" ref='surepwd' type="password" v-model="input4" placeholder="请再输入密码"></yd-input>
        </yd-cell-item>
    </yd-cell-group>
     <yd-button-group>
        <yd-button size="large" type="primary" shape="circle" @click.native="reg">注册</yd-button>
    </yd-button-group>
    </div>
</template>
<script>
import users from '@/components/enter/userheader.vue'
import storage from '../../utils/storage'
export default {
    data(){
      return{
        input1: this.$store.state.UsersPage.regisrer.input1,
        input2: this.$store.state.UsersPage.regisrer.input2,
        input3: this.$store.state.UsersPage.regisrer.input3,
        input4: this.$store.state.UsersPage.regisrer.input4,
        title:"注册"
      }
    },
    created(){
    this.$store.state.appPage.showfooter = false
   },
   methods:{
     reg(){
          if(this.$refs.phone.valid && this.$refs.nicname.valid && this.$refs.surepwd.valid && this.$refs.pwd.valid){
            if(this.input3==this.input4){
                var params={
                      name:this.input2,
                      user_nike:this.input1,
                      pwd: this.input4,
                   }
                   this.$axios.post({
                      url:"user/regisrer",
                      token: this.$utils.encrypt(params)
                    },(res)=>{
                       if(res.data.data.msg){
                          this.$dialog.toast({
                                mes:res.data.data.msg,
                                timeout:1500
                          })
                          this.$router.replace({name:'home'})
                        }else{
                          var list = res.data.data
                          storage.setLocation("user",list[0])
                          this.$router.replace({name:'home'})
                        }
                    })







            }else{
              this.$dialog.toast({
                   mes:"密码不一致",
                   timeout:1500
               })
            }
         }else{
               this.$dialog.toast({
                   mes:"bu wei kong",
                   timeout:1500
               })
         }
     }
   },
   components:{
      users
   }
}
</script>
<style lang="less" scoped>
.me-header{
    width: 100%;
    height: 4.6rem;
    background:url("https://m.mi.com/static/img/bg.63c8e19851.png") center 0 #f37d0f;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    img{
       width: 1.6rem ;
    }
    p{
        color: aliceblue;
        margin-top: 0.4rem;
        font-size: 0.3rem;
        letter-spacing:3px;
    }
}
</style>
