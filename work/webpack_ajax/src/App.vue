<template>
  <div class="container">
    <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <search :set-search-name="setSearchName"></search>
    </section>
    <list :search-name="searchName"></list>
  </div>
</template>
<script>
  import Search from './components/Search'
  import List from './components/List'

  export default {
    data () {
      return {
        searchName: null
      }
    },
    methods: {
      setSearchName(searchName) {
        this.searchName = searchName
      }
    },
    components: {Search, List}
  }
</script>
<style>

</style>