<template>
  <div class="editor-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-10 offset-md-1 col-xs-12">
          <form>
            <fieldset>
              <fieldset class="form-group">
                <input v-model="articleData.title" type="text" class="form-control form-control-lg" placeholder="Article Title">
              </fieldset>
              <fieldset class="form-group">
                <input v-model="articleData.description" type="text" class="form-control" placeholder="What's this article about?">
              </fieldset>
              <fieldset class="form-group">
                <textarea
                  v-model="articleData.body"
                  class="form-control"
                  rows="8"
                  placeholder="Write your article (in markdown)"
                ></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input @change="addTags" type="text" class="form-control" placeholder="Enter tags">
                <div class="tag-list"></div>
              </fieldset>
              <button @click.prevent="onSubmit" class="btn btn-lg pull-xs-right btn-primary" type="button">Publish Article</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      articleData: {
        title: '',
        description: '',
        body: '',
        tagList: []
      }
    }
  },
  methods: {
    onSubmit () {
      const article = {
        article: {
          title: this.articleData.title,
          description: this.articleData.description,
          body: this.articleData.body,
          tagList: this.articleData.tagList
        }
      }

      this.$store.dispatch('createArticle', article);
    },
    addTags (event) {
      this.articleData.tagList = event.target.value.split(',').map(tag => {
        return tag.trim();
      });
    }
  }
}
</script>
