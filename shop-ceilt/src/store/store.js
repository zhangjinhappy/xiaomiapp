import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/index'
import utils from '../utils/utils'
import storage from '../utils/storage'
import {userInfo,goodList,cartPage,homePage,appPage,UsersPage,DetailPage} from './message'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    appPage,
    cartPage,
    homePage,
    UsersPage,
    DetailPage
  },
  // getters:{
  //     showTaber(state){
  //       return state.cartPage.shoplist.length ===0? state.appPage.showfooter=true:state.appPage.showfooter=false
  //     }
  // },
  mutations: {
        setPageLoad(state,load){
          setTimeout(() => {
            state.appPage.pageLoad = load;
          }, 1000);
        },
        setHomeList(state,data){
            state.homePage.homelist=data
        },
        detailList(state,data){
          state.DetailPage.detail=data[0]
          state.DetailPage.detailSider = JSON.parse(data[1].imgsrc);
          state.appPage.showfooter = false
        },
        shopCarPage(state,data){
          if(data.list){
             alert(data.list)
          }else{
            state.cartPage.shoplist = data;
            if(state.cartPage.shoplist.length === 0){
              state.cartPage.showCar = false;
              state.appPage.showfooter = true;
            }else{
              state.cartPage.showCar = true
              state.appPage.showfooter = false
            }
          }

        },
        addShopCar(state,data){
          var list = data.data
          state.cartPage.shoplist.push(list[0])
        }
  },
  actions: {
    //  home页面列表初始化
      initApp(context){
        axios.get({
          url:"/shop/homelist",
          token: utils.encrypt({})
        },(res)=>{
          context.commit('setHomeList',res.data)
        })
        context.commit('setPageLoad',!1)
      },
      // 购物车页面
      initCar(context){
        axios.get({
          url:"/cart/shopindex",
          token: utils.encrypt({})
        },(res)=>{
          console.log(res)
          context.commit("shopCarPage",res.data)
        })
        context.commit('setPageLoad',!1)
      },
      // 进入商品详情页面一
      initShopDetail(context,sid){
        axios.get({
          url:"shop/shopinfo",
          token: utils.encrypt({id:sid})
        },(res)=>{
          context.commit('detailList',res.data)
        })
        context.commit('setPageLoad',!1)
      },
      // 注册
      addCarPage(context,id){
        axios.get({
          url:"cart/addcar",
          token: utils.encrypt({id})
        },(res)=>{
           context.commit('addShopCar',res.data)
        })
      }
      // 登录
  }
})
