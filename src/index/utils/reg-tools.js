/**
 * @files 将 @/utils/global 和 @/api/modules 目录下的方法自动注册到全局
 * @author yanghuning
 */

 function install(Vue) {
  // 注册 @/utils/global 目录
  var reFun1 = require.context('@/utils/global', true, /\.js$/i)
  var reArr2 = reFun1.keys()
  reArr2.map(function(item) {
    var toolObj1 = reFun1(item)
    if (typeof toolObj1 === 'function') {
      Vue.prototype[toolObj1.name] = toolObj1
    } else if (typeof toolObj1 === 'object') {
      for (var key in toolObj1) {
        Vue.prototype[key] = toolObj1[key]
      }
    }
  })

  // 注册 @/api/modules 目录
  var reFun2 = require.context('@/api/modules', true, /\.js$/i)
  var reArr2 = reFun2.keys()
  reArr2.map(function(item) {
    var toolObj2 = reFun2(item)
    if (typeof toolObj2 === 'function') {
      Vue.prototype[toolObj2.name] = toolObj2
    } else if (typeof toolObj2 === 'object') {
      for (var key in toolObj2) {
        Vue.prototype[key] = toolObj2[key]
      }
    }
  })
}

export default { install }