import { ADD_COUNTER, ADD_TO_CART } from './mutations-types'
export default {
  addCart({ state, commit },payload) {
    return new Promise( resolved => {
      let product = state.cartList.find((item) => item.id == payload.id)
      if(product) {
        commit(ADD_COUNTER,product)
        resolved('商品数量加1')
      }else {
        commit(ADD_TO_CART,payload)
        resolved('商品添加成功')
      }
    } )

  }
}