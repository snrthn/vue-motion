/**
 * @files 将 @/filters/global 目录下的方法自动注册到全局
 * @author yanghuning
 */

function install(Vue) {
  var reFun = require.context('@/filters/global', true, /\.js$/i)
  var reArr = reFun.keys()
  reArr.map(function(item) {
    var filterObj = reFun(item)
    for (let key in filterObj) {
      if (typeof filterObj[key] === 'function') {
        Vue.filter(key, filterObj[key]);
      }
    }
  })
}

export default { install }