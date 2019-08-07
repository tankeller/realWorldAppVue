<template>
    <div>
        <app-list-article :key="index" v-for="(article, index) in articles" :article="article"></app-list-article>
    </div>
</template>


<script>
    import axios from 'axios'
    import ListArticle from './ListArticle.vue'

    export default {
        data () {
            return {
                articles: {}
            }
        },
        props: ['author', 'showFavoritedArticles'],
        created () {
            if (this.author) {
                let urlParam = 'author'
                if (this.showFavoritedArticles) {
                    urlParam = 'favorited';
                }
                axios.get('https://conduit.productionready.io/api/articles?' + urlParam + '=' + this.author)
                .then(res => {
                    this.articles = res.data.articles;
                })
                .catch(error => console.log(error))
            } else {
                axios.get('https://conduit.productionready.io/api/articles')
                .then(res => {
                    this.articles = res.data.articles;
                })
                .catch(error => console.log(error))
            }
        },
        components: {
            AppListArticle: ListArticle
        }
    };
</script>
