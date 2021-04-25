/**
 * @files 将 @/utils/global、@/api/module 目录下的方法自动注册到全局
 * @author yanghuning
 */

function install(Vue) {
  var reFun1 = require.context('@/api/modules', true, /\.js$/i);
  var reFun2 = require.context('@/utils/global', true, /\.js$/i);
  var reArr = [...reFun1.keys(), ...reFun2.keys()];
  reArr.map(function(item) {
    if (item === './index.js') return;
    var toolObj = (function () {
      try {
        return reFun1(item);
      } catch (e) {
        return reFun2(item);
      }
    }());
    if (typeof toolObj === 'function') {
      Vue.prototype[toolObj.name] = toolObj;
    } else if (typeof toolObj === 'object') {
      for (var key in toolObj) {
        Vue.prototype[toolObj[key].name] = toolObj[key];
      }
    }
  })
}

export default { install };