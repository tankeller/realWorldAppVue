<template>
  <div class="home-page">

  <div class="banner">
    <div class="container">
      <h1 class="logo-font">conduit</h1>
      <p>A place to share your knowledge.</p>
    </div>
  </div>

  <div class="container page">
    <div class="row">

      <div class="col-md-9">
        <div class="feed-toggle">
          <ul class="nav nav-pills outline-active">
            <li class="nav-item">
              <a class="nav-link disabled" href="">Your Feed</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="">Global Feed</a>
            </li>
          </ul>
        </div>

        <app-article-list></app-article-list>
        
      </div>

      <div class="col-md-3">
        <div class="sidebar">
          <p>Popular Tags</p>

          <div class="tag-list">
            <a :key="index" v-for="(tag, index) in tags" href="" class="tag-pill tag-default">
              {{ tag }}
            </a>
          </div>
        </div>
      </div>

    </div>
  </div>

</div>
</template>

<script>
  import axios from 'axios'
  import ArticleList from '../components/Listing/ArticleList.vue'

  export default {
    name: "home",
    data() {
      return {
        tags: {}
      }
    },
    components: {
      AppArticleList: ArticleList
    },
    created () {
      axios.get('https://conduit.productionready.io/api/tags')
      .then(res => {
        this.tags = res.data.tags;
      }).catch((err) => {
        console.log(err)
      });
    }
  };
</script>
