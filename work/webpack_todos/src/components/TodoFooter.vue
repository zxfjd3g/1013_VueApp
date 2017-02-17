<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="allDone"/>
    </label>
    <span>
          <span>已完成{{doneCount}}</span> / 全部{{totalCount}}
        </span>
    <button class="btn btn-danger" v-show="doneCount>0" @click="deleteAllDone">清除已完成任务</button>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: ['totalCount', 'doneCount', 'deleteAllDone', 'updateAllDone'],
    computed: {
      allDone: {//双向数据绑定效果
        get() {
          return this.totalCount===this.doneCount && this.totalCount>0
        },
        set(value) {
          this.updateAllDone(value)
        }
      }
    }
  }
</script>

<style>
  /*footer*/
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>