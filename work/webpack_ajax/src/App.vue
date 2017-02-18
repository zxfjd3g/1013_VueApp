<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <todo-header :add-todo="addTodo"></todo-header>
      <todo-main :todos="todos" :delete-todo="deleteTodo"></todo-main>
      <todo-footer :total-count="todos.length" :done-count="doneCount"
                   :delete-all-done="deleteAllDone" :update-all-done="updateAllDone"></todo-footer>
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
      },
      deleteAllDone () {
        this.todos = this.todos.filter(todo => !todo.isDone)
      },
      updateAllDone(isAllDone) { // 将所有的todo设置为指定的状态
        this.todos.forEach(item => {
          item.isDone = isAllDone
        })
      }
    },
    watch: {
      todos: {
        handler: storageUtil.saveTodos,
        deep: true // 深度监视
      }
    },
    computed: {
      doneCount: function () {
        return this.todos.reduce((preCount, todo)=> todo.isDone?++preCount:preCount, 0)
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