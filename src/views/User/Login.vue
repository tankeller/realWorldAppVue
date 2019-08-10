<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Sign up</h1>
          <p class="text-xs-center">
            <router-link :to="{ name: 'register'}">Need an account?</router-link>
          </p>

          <!-- <ul class="error-messages">
            <li>That email is already taken</li>
          </ul> -->

          <form>
            <fieldset class="form-group">
              <input class="form-control form-control-lg" type="text" placeholder="Email" v-model="formData.email">
            </fieldset>
            <fieldset class="form-group">
              <input class="form-control form-control-lg" type="password" placeholder="Password" v-model="formData.password">
            </fieldset>
            <button class="btn btn-lg btn-primary pull-xs-right" @click.prevent="onSubmit">
              Sign up
            </button>
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
        email: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit () {
      const user = {
        user: {
          email: this.formData.email,
          password: this.formData.password
        }
      }
      this.$store.dispatch('login', user);
    }
  }
}
</script>
