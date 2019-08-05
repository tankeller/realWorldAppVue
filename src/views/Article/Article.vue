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
          <app-comment-card-list :slug="this.$route.params.slug"></app-comment-card-list>
          
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  import axios from 'axios';
  import AppArticleMeta from '@/components/article/articleMeta.vue';
  import AppCreateCommentForm from '@/components/article/createCommentForm.vue';
  import AppCommentCardList from '@/components/article/commentCardList.vue';

  export default {
        data () {
          return {
            article: {},
            loading: true
          }
        },
        created () {
          let slug = this.$route.params.slug;
          axios.get('https://conduit.productionready.io/api/articles/' + slug)
          .then(res => {
              this.article = res.data.article;
              this.loading = false;
              console.log(this.article);
          })
          .catch(error => console.log(error));
        },
        components: {
          AppArticleMeta,
          AppCreateCommentForm,
          AppCommentCardList
        }
  }
</script>
