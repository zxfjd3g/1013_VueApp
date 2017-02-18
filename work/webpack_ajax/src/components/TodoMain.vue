<template>
  <ul class="todo-main">
    <todo-item v-for='todo in todos' :todo="todo" :delete-todo="deleteTodo"></todo-item>
  </ul>
</template>

<script type="text/ecmascript-6">
  import TodoItem from './TodoItem'
  export default {
    props: ['todos', 'deleteTodo'],
    components: {TodoItem}
  }
</script>

<style>
  /*main*/
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }
</style>