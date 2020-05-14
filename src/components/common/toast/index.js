import Toast from './Toast.vue'
const o = {}

o.install = function (Vue) {

  //获取组件构造器
  const oContrustor = Vue.extend(Toast)
  //构建组件
  const oToast = new oContrustor()
  //将组件挂载到某一个元素上 
  oToast.$mount(document.createElement('div'))
  //将元素添加到body中
  document.body.appendChild(oToast.$el)
  //添加对应组件的引用
  Vue.prototype.$toast = oToast
}

export default o