/**
 * @files 将 @/components/global 目录下的组件自动注册到全局
 * @author yanghuning
 */

function install (Vue) {
  var reFun = require.context('@/components/global', true, /\.vue$/i)
  var reArr = reFun.keys()
  reArr.map(function (item) {
    var vueMoud = reFun(item)['default']
    var comName = vueMoud.name || ''
    // 如果组件存在 name 属性，则全局注册
    if (comName) {
      Vue.component(comName, vueMoud)
    }
  })
}

export default { install }