<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <todo-header :add-todo="addTodo"></todo-header>
      <todo-main :todos="todos"></todo-main>
      <todo-footer></todo-footer>
    </div>
  </div>
</template>
<script>
  import TodoHeader from './components/TodoHeader'
  import TodoMain from './components/TodoMain'
  import TodoFooter from './components/TodoFooter'

  export default {
    data () {
      return {
        todos: [
          {text: '工作', isDone: true},
          {text: '买房', isDone: false}
        ]
      }
    },
    methods: {
      addTodo (todo) {
        this.todos.unshift(todo)
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