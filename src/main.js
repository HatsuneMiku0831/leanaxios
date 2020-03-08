import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import {request,request2,request3,request4} from './network/request'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// axios({
//   url:'http://123.207.32.32:8000/home/multidata',
//   method:'get'
// }).then(res => {
//   // console.log(res)
// })
//
// axios({
//   url:'http://123.207.32.32:8000/home/data',
//   method:'get',
//   //专门针对get请求的参数拼接
//   params:{
//     type:'pop',
//     page:1
//   }
// }).then(res => {
//   // console.log(res);
// })
//
// //同时收到两个请求的结果后再执行后续处理
// axios.all([axios({
//   url:'http://123.207.32.32:8000/home/multidata'
// }),axios({
//   url:'http://123.207.32.32:8000/home/data'
// })]).then( res => {
//   // console.log(res)
// })
//
// axios.defaults.baseURL = 'http://123.207.32.32:8000'
// axios.defaults.timeout = 5
//
// axios.all([axios({
//   url:'/home/multidata'
// }),axios({
//   url:'/home/data'
// })]).then( res => {
//   // console.log(res)
// }).catch(err => {
//   // console.log(err)
// })
//
// //创建axios实例
// const instance1 = axios.create({
//   baseURL:'http://123.207.32.32:8000',
//   timeout:5000
// })
//
// instance1({
//   url:'/home/multidata'
// }).then(res => {
//   // console.log(res)
// })
//
// instance1({
//   url:'/home',
//   params: {
//     type:'pop',
//     page:1
//   }
// })

// request(
//     {url:'/home/multidata'},
//         res => {
//   console.log(res)
// },err => {
//   console.log(err);
// })

// request2({
//   baseConfig:{
//     url:'/home/multidata',
//     method:'get'
//   },
//   success(res){
//     console.log(res);
//   },
//   failure(err){
//     console.log(err);
//   }
// })
// request3({url:'/home/multidata',method:`get`}).then(res => {
//   console.log(res);
// }).catch(err => {
//   console.log(err);
// })
request4({url:'http://localhost:8888/hello?user=aaa'}).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})