<template>
  <div class="profile-page">
    <div class="user-info">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-10 offset-md-1">
            <img v-if="user.image" :src="user.image" class="user-img" />
            <h4>{{ user.username }}</h4>
            <p>{{ user.bio }}</p>
            <button class="btn btn-sm btn-outline-secondary action-btn">
              <i class="ion-plus-round"></i>
              &nbsp;
              Follow {{ user.username }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-10 offset-md-1">
          <div class="articles-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item">
                <a 
                class="nav-link active" 
                href="#" 
                @click.prevent="showOwnArticles = !showOwnArticles">
                  My Articles
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="#"
                  @click.prevent="showOwnArticles = !showOwnArticles">
                    Favorited Articles
                </a>
              </li>
            </ul>
          </div>

          <template v-if="!loading">
            <app-article-list 
              v-if="showOwnArticles" 
              :author="user.username">
            </app-article-list>
            <app-article-list
              v-else
              :author="user.username"
              :showFavoritedArticles="true"
            >
            </app-article-list>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import AppArticleList from "@/components/Listing/ArticleList.vue";

export default {
  data() {
    return {
      user: {},
      loading: true,
      showOwnArticles: true,
    };
  },
  components: {
    AppArticleList
  },
  created() {
    axios
      .get(
        "https://conduit.productionready.io/api/profiles/" +
          this.$route.params.username
      )
      .then(res => {
        this.user = res.data.profile;
        this.loading = false;
      })
      .catch(err => {
        console.log(err);
      });
  },
  computed: {}
};
</script>
