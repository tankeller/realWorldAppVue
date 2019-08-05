<template>
  <div class="article-page">
    <div class="banner">
      <div class="container">
        <h1>{{ article.title }}</h1>
        <app-article-meta v-if="!loading" :article="article"></app-article-meta>
      </div>
    </div>

    <div class="container page">
      <div class="row article-content">
        <div class="col-md-12">
          <p>{{ article.body }}</p>

          <ul  class="tag-list">
            <li :key="index" v-for="(tag, index) in article.tagList" class="tag-default tag-pill tag-outline">
              {{ tag }}
            </li>
          </ul>
        </div>
      </div>

      <hr>

      <div class="article-actions">
        <app-article-meta v-if="!loading" :article="article"></app-article-meta>
      </div>

      <div class="row">
        <div class="col-xs-12 col-md-8 offset-md-2">
      
            <app-create-comment-form></app-create-comment-form>

          <div class="card">
            <div class="card-block">
              <p
                class="card-text"
              >With supporting text below as a natural lead-in to additional content.</p>
            </div>
            <div class="card-footer">
              <a href class="comment-author">
                <img src="http://i.imgur.com/Qr71crq.jpg" class="comment-author-img">
              </a>
              &nbsp;
              <a href class="comment-author">Jacob Schmidt</a>
              <span class="date-posted">Dec 29th</span>
            </div>
          </div>

          <div class="card">
            <div class="card-block">
              <p
                class="card-text"
              >With supporting text below as a natural lead-in to additional content.</p>
            </div>
            <div class="card-footer">
              <a href class="comment-author">
                <img src="http://i.imgur.com/Qr71crq.jpg" class="comment-author-img">
              </a>
              &nbsp;
              <a href class="comment-author">Jacob Schmidt</a>
              <span class="date-posted">Dec 29th</span>
              <span class="mod-options">
                <i class="ion-edit"></i>
                <i class="ion-trash-a"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  import axios from 'axios';
  import AppArticleMeta from '@/components/article/articleMeta.vue';
  import AppCreateCommentForm from '@/components/article/createCommentForm.vue'

  export default {
        data () {
          return {
            article: {},
            loading: true
          }
        },
        created () {
          let slug = this.$route.params.slug;
          if (slug.length >= 1) {
            axios.get('https://conduit.productionready.io/api/articles/' + slug)
            .then(res => {
                this.article = res.data.article;
                this.loading = false;
                console.log(this.article);
            })
            .catch(error => console.log(error));
          }
        },
        components: {
          AppArticleMeta,
          AppCreateCommentForm
        }
  }
</script>
