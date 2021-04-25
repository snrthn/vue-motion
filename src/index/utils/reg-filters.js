/**
 * @files 将 @/filters/global 目录下的方法自动注册到全局
 * @author yanghuning
 */

function install(Vue) {
  var reFun = require.context('@/filters/global', true, /\.js$/i)
  var reArr = reFun.keys()
  reArr.map(function(item) {
    if (item === './index.js') return
    var filterObj = reFun(item)
    if (typeof filterObj === 'function') {
      Vue.filter([filterObj.name], filterObj)
    } else if (typeof filterObj === 'object') {
      for (var key in filterObj) {
        Vue.filter(filterObj[key].name, filterObj[key])
      }
    }
  })
}

export default { install }