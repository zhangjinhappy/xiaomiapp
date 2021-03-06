import axios from 'axios'
import Vue from 'vue';
import { Confirm, Alert, Toast, Notify, Loading } from 'vue-ydui/dist/lib.rem/dialog';
import utils from '../utils/utils'

axios.defaults.baseURL = '/api';
axios.defaults.timeout = 3000;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// 添加请求拦截器
axios.interceptors.request.use(config =>{
  // 在发送请求之前做些什么
  return config;
},  (error)=> {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(response => {
     Loading.open('Loading......');
   response.data.msg? response=response:response.data.data = JSON.parse(utils.private_decrypted(response.data.data))
  return response;
}, error =>{
  // 对响应错误做点什么
  return Promise.reject(error);
});

export default {
  // Get 请求
  get (params,callback){
       axios.defaults.headers.common['token'] = params.token;
       axios.get(params.url)
       .then(success =>{
              setTimeout(() => {
                Loading.close();
                }, 2000);
           callback(success.data)
       })
       .catch(error =>{
        Toast({
            position: 'top',
            time: 200,
            message: "get 请求失败"
         });
       })
   },
  //post 请求
  post (params,callback){
    axios.defaults.headers.common['token'] = params.token;
    axios.post(params.url,params.token)
    .then(response =>{
          setTimeout(() => {
            Loading.close();
            }, 2000);
        callback(response)
    })
    .catch(error =>{
      Toast({
         position: 'top',
         time: 200,
         message: "get 请求失败"
      });
    })
}

}
