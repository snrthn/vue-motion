<template>
  <div class="home">
    <img alt="Vue logo" :src="require('assets/logo.png')">
    <div>全局过滤器用法：{{ 1000 | toFixed(2) }}</div>
    <button @click="fetchData">测试一下网络请求</button>
    <AppTest/>
    <HelloWorld msg="Hello Vue.js"/>
  </div>
</template>

<script>
// 手动引入组件
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  mounted () {
    this.testDemo();
  },
  methods: {
    fetchData () {
      // 测试一个网络请求
      this.getUserInfo({
        params: {
          label: 'test'
        },
        data: {
          time: new Date() * 1
        }
      })
    }
  }
}
</script>

<style scoped lang="less">
  .home {
    button {
      margin: 16px;
    }    
  }
</style>