<template>
  <h1>About</h1>
  <div>{{msg}}</div>
  <p>message: {{message}}</p>
</template>

<script type="text/ecmascript-6">
  export default {
    props: ['message'],
    data () {
      return {
        msg: 'About route component!'
      }
    }
  }
</script>

<style>

</style>