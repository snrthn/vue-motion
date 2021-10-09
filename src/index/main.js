import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// 动态设置icon
// import 'utils/set-favicon';

// 样式重置
import 'styles/reset.css';

// 自动注册公共方法
import gTools from '@/utils/reg-tools';
Vue.use(gTools);

// 自动注册公共组件
import gComponents from '@/utils/reg-components';
Vue.use(gComponents);

// 自动注册过滤器
import gFilters from '@/utils/reg-filters';
Vue.use(gFilters);


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
