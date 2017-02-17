<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <todo-header :add-todo="addTodo"></todo-header>
      <todo-main :todos="todos" :delete-todo="deleteTodo"></todo-main>
      <todo-footer></todo-footer>
    </div>
  </div>
</template>
<script>
  import TodoHeader from './components/TodoHeader'
  import TodoMain from './components/TodoMain'
  import TodoFooter from './components/TodoFooter'
  import storageUtil from './util/storageUtil'

  export default {
    data () {
      return {
        todos: storageUtil.getTodos()
      }
    },
    methods: {
      addTodo (todo) {
        this.todos.unshift(todo)
      },
      deleteTodo (todo) {
        this.todos.$remove(todo)
      }
    },
    watch: {
      todos: {
        handler: storageUtil.saveTodos,
        deep: true // 深度监视
      }
    },
    components: {TodoHeader, TodoMain, TodoFooter}
  }
</script>
<style>
  /*app*/
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>