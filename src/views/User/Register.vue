<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Sign up</h1>
          <p class="text-xs-center">
            <router-link :to="{name: 'login'}">Have an account?</router-link>
          </p>

          <ul v-if="false" class="error-messages">
            <li>That email is already taken</li>
          </ul>

          <form @:submit.prevent="onSubmit">
            <fieldset class="form-group">
              <input class="form-control form-control-lg" v-model="formData.name" type="text" placeholder="Your Name">
            </fieldset>
            <fieldset class="form-group">
              <input class="form-control form-control-lg" v-model="formData.email" type="text" placeholder="Email">
            </fieldset>
            <fieldset class="form-group">
              <input class="form-control form-control-lg" v-model="formData.password" type="password" placeholder="Password">
            </fieldset>
            <button @click.prevent="onSubmit" type="submit" class="btn btn-lg btn-primary pull-xs-right">Sign up</button>
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
      formData: {
        username: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit () {
      const user = {
        user: {
          username: this.formData.name,
          email: this.formData.email,
          password: this.formData.password
        }
      }
      this.$store.dispatch('signup', user);
    }
  }
}
</script>
