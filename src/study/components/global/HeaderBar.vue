<template>
  <div class="app-header-bar">
    <div @click="goBack" class="back">
        <van-icon name="arrow-left" />
        <span>返回</span>
    </div>
    <div class="title">
        {{ title }}
    </div>
    <div @click="goMore" class="menu">
        <van-icon name="ellipsis" size="20" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderBar',
  data () {
    return {}
  },
  props: {
      title: {
          type: String,
          default () {
              return ''
          }
      }
  },
  mounted () {
    this.initFun();
  },
  methods: {
    // 初始化
    initFun () {
      // TODO
    },
    // 返回上个路由
    goBack () {
        this.$emit('goToBack');
    },
    // 更多操作
    goMore () {
        this.$emit('goToMore');
    }
  }
}
</script>

<style scoped lang="less">
  .app-header-bar {
    width: 100%;
    height: 50px;
    background: #ffaa00;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
    color: #ffffff;

    div.back, div.menu {
        width: 60px;
        height: 100%;
        font-size: 15px;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    div.title {
        flex: 1;
        text-align: center;
    }
  }
</style>
