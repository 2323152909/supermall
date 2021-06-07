import axios from 'axios'

export function request1(config){
  // 创建对象
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })
  // 配置拦截器
  instance.interceptors.request.use(res => {
    return res;
  },error => {
    return Promise.reject(error);
  });
  // 响应拦截器
  instance.interceptors.response.use(response => {
    return response.data;
  },error => {
    return Promise.reject(error);
  });
  // 发送网络请求
  return instance(config);
}

export function request2(config){
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 5000,
  })
  instance.interceptors.request.use(res => {
    return res;
  },error => {
    return Promise.reject(error)
  })
  instance.interceptors.response.use(response => {
    return response.data;
  },error => {
    return Promise.reject(error);
  });

  return instance(config);
}