<template>
    <div>
        <div :key="index" v-for="(comment, index) in comments" class="card">
            <div class="card-block">
                <p class="card-text">{{ comment.body }}.</p>
            </div>
            <div class="card-footer">
                <router-link :to="{ name: 'profile', params: { username: comment.author.username }}" v-if="comment.author.image" class="comment-author">
                    <img :src="comment.author.image" class="comment-author-img user-img" />
                </router-link>
                &nbsp;
                <a href class="comment-author">{{ comment.author.username }}</a>
                <span class="date-posted">{{ comment.createdAt | formatDate}}</span>
                <span class="mod-options">
                    <i class="ion-edit"></i>
                    <i class="ion-trash-a"></i>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data () {
        return {
            comments: {}
        }
    },
    props: ['slug'],
    created() {
        axios.get('https://conduit.productionready.io/api/articles/' + this.slug + '/comments')
        .then(res => {
            this.comments = res.data.comments;
            console.log(this.comments);
        })
        .catch(error => console.log(error))
    }
}
</script>

