<template>
  <li :style="{background:bgColor}" @mouseenter="handleEnter(true)" @mouseleave="handleEnter(false)">
    <label>
      <input type="checkbox" v-model="todo.isDone"/>
      <span>{{todo.text}}</span>
    </label>
    <button class="btn btn-danger" :style="{display:display}" @click="delete">删除</button>
  </li>
</template>

<script type="text/ecmascript-6">
  export default {
    props: ['todo', 'deleteTodo'],
    data () {
      return {
        bgColor: '#fff',
        display: 'none'
      }
    },
    methods: {
      handleEnter(isEnter) {
        if(isEnter) {
          this.bgColor = '#ddd'
          this.display = 'block'
        } else {
          this.bgColor = '#fff'
          this.display = 'none'
        }
      },
      delete() {
        if(confirm(`确定删除${this.todo.text}吗?`)) {
          // this.deleteTodo(this.todo)
          //触发delete事件
          this.$dispatch('delete', this.todo)
        }
      }
    }
  }
</script>

<style>
  /*item*/
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    display: none;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }
</style>