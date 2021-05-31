import {request1,request2} from 'network/request'

export function getHomeMultidata(){
  return request1({
    url:'/home/multidata'
  })
}

export function getHomeGoods(pop,page){
  return request2({
    url:'/home/data',
    params:{
      type:pop,
      page:page
    },
    Headers:{
      // 设置跨域请求头
      "Access-Control-Allow-Origin":'*',
    }
  })
}