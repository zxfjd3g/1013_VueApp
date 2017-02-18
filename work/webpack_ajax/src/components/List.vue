<template>
  <h2 v-show="firstView">Enter name to search</h2>
  <h2 v-show="loading">Loading result...</h2>
  <h2 v-show="errorMsg">{{errorMsg}}</h2>
  <div class="row" v-show="users">
    <div class="card" v-for="user in users">
      <a :href="user.url" target="_blank">
        <img :src="user.avatar" style='width: 100px'/>
      </a>
      <p class="card-text">{{user.name}}</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: ['searchName'],
    data () {
      return {
        firstView: true,
        loading: false,
        users: null,
        errorMsg: null
      }
    },
    computed: {
      searchName: {
        set(searchName) {//searchName改变了, 发送ajax请求
          //更新状态
          this.firstView = false
          this.loading = true
          //发送ajax请求
          this.$http.get(`https://api.github.com/search/users?q=${searchName}`)
              .then(
                  response => {
                    console.log(response.data)
                    //从响应数据收集得到users
                    const users = response.data.items.map((item) => {
                      return {
                        url: item.html_url,
                        avatar: item.avatar_url,
                        name: item.login
                      }
                    })
                    //更新状态
                    this.loading = false
                    this.users = users
                  },
                  response => {
                    console.log(response.statusText)
                    //更新状态
                    this.loading = false
                    this.errorMsg = response.statusText
                  }
              )
        }
      }
    }
  }
</script>

<style>
  .card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
  }

  .card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
  }

  .card-text {
    font-size: 85%;
  }

</style>