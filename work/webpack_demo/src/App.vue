<template>
  <hello></hello>
  <img src="./assets/logo.png">
  <p>app组件文本内容....</p>
</template>
<script>
  import Hello from './components/Hello'

  export default {
    components: {Hello}
  }
</script>
<style>
  p {
    background: red;
    color: green;
  }
</style>