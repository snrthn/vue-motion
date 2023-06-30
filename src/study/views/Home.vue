<template>
  <div class="app-home">

    <!-- 路由入口 -->
    <router-view />
    
    <!-- TabBar标签栏 -->
    <van-tabbar route v-model="active" inactive-color="#707070" active-color="#ff6600">
      <van-tabbar-item v-for="(item, index) in icons" :key="index" replace :to="item.path">
        <template #icon="props">
          <img :src="props.active ? icons[index].active : icons[index].inactive" />
        </template>
        <span>{{ icons[index].label }}</span>
      </van-tabbar-item>
    </van-tabbar>

  </div>
</template>

<script>
export default {
  data () {
    return {
      active: 0,
      // TabBar图标
      icons: [
        {
          inactive: require('assets/images/tabbar/letter.png'),
          active: require('assets/images/tabbar/letter_act.png'),
          path: '/index/letter',
          label: '字母'
        },
        {
          inactive: require('assets/images/tabbar/number.png'),
          active: require('assets/images/tabbar/number_act.png'),
          path: '/index/number',
          label: '数字'
        },
        {
          inactive: require('assets/images/tabbar/english.png'),
          active: require('assets/images/tabbar/english_act.png'),
          path: '/index/english',
          label: '单词'
        },
        {
          inactive: require('assets/images/tabbar/color.png'),
          active: require('assets/images/tabbar/color_act.png'),
          path: '/index/color',
          label: '颜色'
        }
      ]
    }
  }
}
</script>

<style scoped lang="less">
  .app-home {
    padding-bottom: 60px;
    .van-hairline--top-bottom {
      height: 60px;
      box-sizing: border-box;
      img {
        width: 28px;
        height: 28px;
      }
    }

    .van-hairline--top-bottom::after {
      position: absolute;
      box-sizing: border-box;
      content: ' ';
      pointer-events: none;
      top: -50%;
      right: -50%;
      bottom: -50%;
      left: -50%;
      border-top: 2px solid #1989fa;
      -webkit-transform: scale(.5);
      transform: scale(.5);
    }
  }
</style>