import {request} from 'network/request'

export function getHomeMultidata(){
  return request({
    url:'/home/multidata'
  })
}

export function getHomeGoods(){
  return request({
    url:''
  })
}