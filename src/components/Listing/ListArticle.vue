<template>
  <div class="article-preview">
    <div class="article-meta">
      <a href="profile.html">
        <img :src="article.author.image">
      </a>
      <div class="info">
        <a href class="author">{{ article.author.username }}</a>
        <span class="date">January 20th</span>
      </div>
      <button class="btn btn-outline-primary btn-sm pull-xs-right">
        <i class="ion-heart"></i> {{ article.favoritesCount }}
      </button>
    </div>
    <a href class="preview-link">
      <h1>{{ article.title }}</h1>
      <p>{{ article.description }}</p>
      <span>Read more...</span>
      <ul class="tag-list">
        <li :key="index" v-for="(tag, index) in article.tagList" class="tag-default tag-pill tag-outline ng-binding ng-scope">
            {{ tag }}
        </li>
    </ul>
    </a>
  </div>
</template>

<script>
    export default {
        props: ['article']
    }
</script>
