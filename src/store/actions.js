import {ADD_COUNTER, ADD_CART, ADD_TOTAL_PRICE, CHANGE_CHECKED} from './mutations_types'

export default {
  increamentCart(context, cart){
    return new Promise((resolve, reject) => {
      // 1.判断之前数组中是否存在当前商品
      let oldCart = context.state.carts.find(item => item.iid == cart.iid)

      // 2.判断oldCart
      if(oldCart){
        context.commit(ADD_COUNTER, oldCart)
        resolve('添加商品数目加一')
      }else{
        // state.carts.push(cart)
        cart.count = 1
        context.commit(ADD_CART, cart)
        resolve('成功添加新商品到购物车')
      }
    })
  },
  changeChecked(context, cart){
    context.commit(CHANGE_CHECKED, cart)
  }
  
}