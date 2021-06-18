import {createStore} from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'

const state = {
  carts:[],
  totalPrice:0
}

const store = createStore({
  state,
  mutations,
  actions,
  getters,
  modules:{}
})

export default store