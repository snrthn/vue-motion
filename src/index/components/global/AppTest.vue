<template>
  <div class="app-test">
    <div>{{ msg }}</div>
  </div>
</template>

<script>
export default {
  name: 'AppTest',
  data () {
    return {
      msg: '这是一个测试组件'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .app-test {
    div {
      font-size: 20px;
      padding: 8px;
      border: 1px solid #cccccc;
    }
  }
</style>
