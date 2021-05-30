import axios from 'axios'

export function request(config){
  // 创建对象
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })
  // 配置拦截器
  instance.interceptors.request.use(config => {
    return config;
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