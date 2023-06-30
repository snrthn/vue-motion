<template>
  <div id="app">

    <!-- 顶部导航栏 NavBar -->
    <van-sticky v-if="$store.state.isHeader">
      <HeaderBar
        :title="$store.state.title"
        @goToBack="toBack"
        @goToMore="toNext"
      />
    </van-sticky>

    <!-- 路由入口 -->
    <router-view/>
    
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    toBack () {
      this.$router.go(-1);
    },
    toNext () {
      console.log('开发中…');
    }
  }
}
</script>

<style lang="less">
  body {
    background: #f5f5f5;
    user-select: none;
  }
</style>