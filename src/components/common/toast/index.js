import Toast from './Toast.vue'

const obj = {}

obj.install = function(Vue){
  // document.body.appendChild(Toast.$el)

  // 1.创建组件构造器
  // const toastConstractor = Vue.extend(Toast)

  // // 2.通过new的方式，可以通过组件构造器创建出一个组件对象
  // const toast = new toastConstractor

  // // 3.将组件对象手动挂载到某个元素上
  // toast.$mount(document.createElement('div'))
  // // 4.toast.$el就是上面创建的div
  // document.body.appendChild(toast.$el)
  Vue.use(Toast)
  Vue.config.globalProperties.$toast = obj
}

export default obj