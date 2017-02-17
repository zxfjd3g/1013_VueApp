<template>
  <h1>{{title}}</h1>
</template>
<script>
  export default {
    data () {
      return {
        title: 'Hello component title'
      }
    }
  }
</script>
<style>
  h1 {
    background: green;
    color: red;
  }
</style>