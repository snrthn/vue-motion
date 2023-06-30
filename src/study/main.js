import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// 动态设置icon
import 'utils/set-favicon';

// 样式重置
import 'styles/reset.css';
// 全局样式
import 'styles/global.css';

// 自动注册公共方法
import gTools from '@/utils/reg-tools';
Vue.use(gTools);

// 自动注册公共组件
import gComponents from '@/utils/reg-components';
Vue.use(gComponents);

// 自动注册过滤器
import gFilters from '@/utils/reg-filters';
Vue.use(gFilters);

// 引入 Vant 组件库
import Vant from 'vant';
Vue.use(Vant);

// 全局提示
import { Toast, Dialog } from 'vant';
Vue.prototype.Dialog = Dialog;
Vue.prototype.Toast = Toast;
Vue.use(Dialog);
Vue.use(Toast);

import 'vant/lib/index.css';

// 引入 swiper
import 'swiper/dist/js/swiper.min.js';
import 'swiper/dist/css/swiper.min.css';

// 引入 echarts 图表库
import * as echarts from 'echarts';
Vue.prototype.echarts = echarts;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
