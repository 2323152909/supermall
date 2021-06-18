import {ADD_COUNTER, ADD_CART, ADD_TOTAL_PRICE, CHANGE_CHECKED} from './mutations_types'

export default {
  [ADD_COUNTER](state, payload){
    payload.count ++
  },
  [ADD_CART](state, payload){
    payload.checked = true
    state.carts.push(payload)
  },
  [CHANGE_CHECKED](state, payload){
    payload.checked = !payload.checked
  }
}