<template>
  <div>
    <ul>
      <li v-for="m in messages">
        <a v-link="{path:'/home/message/mdetail/'+m.id}">{{m.content}}</a>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {

    data () {
      return {
        messages: []
      }
    },
    ready () {
      //模拟ajax请求, 获取数组数据
      this.messages = [
        {id:1, content: 'Message01'},
        {id:2, content: 'Message02'},
        {id:4, content: 'Message04'},
        {id:3, content: 'Message03'}
      ]
    }

  }
</script>

<style>

</style>