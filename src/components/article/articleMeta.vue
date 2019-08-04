<template>
    <div class="article-meta">
        <a href="">
            <img v-if="article.author.image.length" :src="article.author.image">
        </a>
        <div class="info">
            <a href class="author">{{ article.author.username }}</a>
            <span class="date">{{ article.createdAt | formatDate}}</span>
        </div>
        <button class="btn btn-sm btn-outline-secondary">
            <i class="ion-plus-round"></i>
            &nbsp;
            Follow {{ article.author.username }}
            <span v-if="article.author.following" class="counter">{{ article.author.following }}</span>
        </button>
        &nbsp;&nbsp;
        <button class="btn btn-sm btn-outline-primary">
            <i class="ion-heart"></i>
            &nbsp;
            Favorite Post
            <span class="counter" v-if="article.favorited">( {{ article.favorited }})</span>
        </button>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                
            }
        },
        props: ['article']
    }
</script>
