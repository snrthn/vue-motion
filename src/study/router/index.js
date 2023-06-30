import Vue from 'vue'
import VueRouter from 'vue-router'
import store from 'store'

// import Login from 'views/login/index'
// import Home from 'views/Home'

// import Letter from 'views/letter/index'
// import Number from 'views/number/index'
// import English from 'views/english/index'
// import Color from 'views/color/index'

// import Forbidden from 'views/author/forbidden'
// import NotFound from 'views/author/notfound'

Vue.use(VueRouter)

let routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackPrefetch: true */ 'views/login/index'),
    meta: {
      title: '临时登机牌'
    }
  },
  {
    path: '/index',
    redirect: '/index/letter',
    name: 'index',
    component: () => import(/* webpackPrefetch: true */ 'views/Home'),
    children: [
      {
        path: 'letter',
        name: 'letter',
        component: () => import(/* webpackPrefetch: true */ 'views/letter/index'),
        meta: {
          title: '皮皮学前班'
        }
      },
      {
        path: 'number',
        name: 'number',
        component: () => import(/* webpackPrefetch: true */ 'views/number/index'),
        meta: {
          title: '认识数字'
        }
      },
      {
        path: 'english',
        name: 'english',
        component: () => import(/* webpackPrefetch: true */ 'views/english/index'),
        meta: {
          title: '认识单词'
        }
      },
      {
        path: 'color',
        name: 'color',
        component: () => import(/* webpackPrefetch: true */ 'views/color/index'),
        meta: {
          title: '认识颜色'
        }
      }
    ]
  },
  {
    path: '/initial',
    name: 'initial',
    component: () => import(/* webpackPrefetch: true */ 'views/letter/initial'),
    meta: {
      title: '声母表'
    }
  },
  {
    path: '/svowel',
    name: 'svowel',
    component: () => import(/* webpackPrefetch: true */ 'views/letter/svowel'),
    meta: {
      title: '单韵母'
    }
  },
  {
    path: '/pvowel',
    name: 'pvowel',
    component: () => import(/* webpackPrefetch: true */ 'views/letter/pvowel'),
    meta: {
      title: '复韵母'
    }
  },
  {
    path: '/anvowel',
    name: 'anvowel',
    component: () => import(/* webpackPrefetch: true */ 'views/letter/anvowel'),
    meta: {
      title: '前鼻韵母'
    }
  },
  {
    path: '/pnvowel',
    name: 'pnvowel',
    component: () => import(/* webpackPrefetch: true */ 'views/letter/pnvowel'),
    meta: {
      title: '后鼻韵母'
    }
  },
  {
    path: '/syllable',
    name: 'syllable',
    component: () => import(/* webpackPrefetch: true */ 'views/letter/syllable'),
    meta: {
      title: '整体认读音节'
    }
  },
  {
    path: '/words',
    name: 'words',
    component: () => import(/* webpackPrefetch: true */ 'views/letter/words'),
    meta: {
      title: '英文字母'
    }
  },
  {
    path: '/telnumber',
    name: 'telnumber',
    component: () => import(/* webpackPrefetch: true */ 'views/number/telnumber'),
    meta: {
      title: '拔电话号码'
    }
  },
  {
    path: '/fruit',
    name: 'fruit',
    component: () => import(/* webpackPrefetch: true */ 'views/english/fruit'),
    meta: {
      title: '水果'
    }
  },
  {
    path: '/food',
    name: 'food',
    component: () => import(/* webpackPrefetch: true */ 'views/english/food'),
    meta: {
      title: '食物'
    }
  },
  {
    path: '/people',
    name: 'people',
    component: () => import(/* webpackPrefetch: true */ 'views/english/people'),
    meta: {
      title: '人物'
    }
  },
  {
    path: '/body',
    name: 'body',
    component: () => import(/* webpackPrefetch: true */ 'views/english/body'),
    meta: {
      title: '身体'
    }
  },
  {
    path: '/animal',
    name: 'animal',
    component: () => import(/* webpackPrefetch: true */ 'views/english/animal'),
    meta: {
      title: '动物'
    }
  },
  {
    path: '/electric',
    name: 'electric',
    component: () => import(/* webpackPrefetch: true */ 'views/english/electric'),
    meta: {
      title: '电器'
    }
  },
  {
    path: '/vehicle',
    name: 'vehicle',
    component: () => import(/* webpackPrefetch: true */ 'views/english/vehicle'),
    meta: {
      title: '交通'
    }
  },
  {
    path: '/engineering',
    name: 'engineering',
    component: () => import(/* webpackPrefetch: true */ 'views/english/engineering'),
    meta: {
      title: '工程'
    }
  },
  {
    path: '/week',
    name: 'week',
    component: () => import(/* webpackPrefetch: true */ 'views/english/week'),
    meta: {
      title: '星期'
    }
  },
  {
    path: '/month',
    name: 'month',
    component: () => import(/* webpackPrefetch: true */ 'views/english/month'),
    meta: {
      title: '月份'
    }
  },
  {
    path: '/num',
    name: 'num',
    component: () => import(/* webpackPrefetch: true */ 'views/english/num'),
    meta: {
      title: '数字'
    }
  },
  {
    path: '/sinogram',
    name: 'sinogram',
    component: () => import(/* webpackPrefetch: true */ 'views/color/sinogram'),
    meta: {
      title: '汉字'
    }
  },
  {
    path: '/poetry',
    name: 'poetry',
    component: () => import(/* webpackPrefetch: true */ 'views/color/poetry'),
    meta: {
      title: '唐诗'
    }
  },
  {
    path: '/haircut',
    name: 'haircut',
    component: () => import(/* webpackPrefetch: true */ 'views/color/haircut'),
    meta: {
      title: '理发'
    }
  },
  {
    path: '/forbidden',
    name: 'forbidden',
    component: () => import(/* webpackPrefetch: true */ 'views/author/forbidden'),
    meta: {
      title: '无权限访问'
    }
  },
  {
    path: '/*',
    name: 'notfound',
    component: () => import(/* webpackPrefetch: true */ 'views/author/notfound'),
    meta: {
      title: '页面不存在'
    }
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  let { title } = to.meta;
  document.title = title;
  store.commit('updateTitle', title);
  next();
});

// 处理路由重复跳转报错问题
const originalPush = VueRouter.prototype.push;
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
}

export default router