/**
 * Created by xfzhang on 2017/2/17.
 */
export default {
  getTodos () { //得到数组对象
    return JSON.parse(localStorage.getItem('todos_key')||'[]')
  },
  saveTodos (todos) {
    localStorage.setItem('todos_key', JSON.stringify(todos))
  }
}