<template>
  <div>
    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header">
          <h2>Router Basic - 01</h2>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!--使用指令v-link进行导航-->
          <a class="list-group-item" v-link="{path:'/about'}">About</a>
          <a class="list-group-item" v-link="{path:'/home'}">Home</a>
        </div>
      </div>

      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <!--用于渲染匹配的组件-->
            <router-view keep-alive :message="msg"></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

  export default {
    data () {
      return {
        msg: 'atguigu.com'
      }
    }
  }
</script>
<style>
</style>