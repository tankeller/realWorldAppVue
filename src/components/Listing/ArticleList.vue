<template>
    <div>
        <app-list-article :key="index" v-for="(article, index) in articles" :article="article"></app-list-article>
    </div>
</template>


<script>
    import axios from 'axios'

    import ListArticle from './ListArticle.vue'
import { close } from 'fs';

    export default {
        data () {
            return {
                articles: {}
            }
        },
        created () {
            axios.get('https://conduit.productionready.io/api/articles')
            .then(res => {
                this.articles = res.data.articles;
            })
            .catch(error => console.log(error))
        },
        components: {
            AppListArticle: ListArticle
        }
    };
</script>
