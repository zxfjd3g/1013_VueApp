<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对Vue的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <comment-add :add-comment="addComment"></comment-add>
      <comment-list :comments="comments" :delete-comment="deleteComment"></comment-list>
    </div>
  </div>
</template>
<script>
  import CommentAdd from './components/CommentAdd'
  import CommentList from './components/CommentList'

  export default {
    data () {
      return {
        comments: [
          {username: 'atguigu', content: 'Vue不错哦!!!'},
          {username: 'xfzhang', content: 'Vue还可以啦!!!'}
        ]
      }
    },
    methods: {
      addComment (comment) {
        this.comments.unshift(comment)
      },
      deleteComment (comment) {
        this.comments.$remove(comment)
      }
    },
    components: {CommentAdd, CommentList}
  }
</script>
<style>

</style>