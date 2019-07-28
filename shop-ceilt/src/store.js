import Vue from 'vue'
import Vuex from 'vuex'
import axios from './api/index'
import utils from './utils/utils'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pageLoad:!0
  },
  mutations: {
    setPageLoad(state,load){
      setTimeout(() => {
        state.pageLoad = load;
      }, 1000);
    }
  },
  actions: {
    initApp(context){
      axios.get({
        url:"/info",
        token: utils.encrypt({id:1})
      },(res)=>{
        console.log(res)
      })
      context.commit('setPageLoad',!1)
    }
  }
})
