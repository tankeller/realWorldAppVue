<template>
    <nav class="navbar navbar-light">
      <div class="container">
        <router-link class="navbar-brand" :to="{ name: 'home'}">conduit</router-link>
        <ul class="nav navbar-nav pull-xs-right">
          <li class="nav-item">
            <!-- Add "active" class when you're on that page" -->
            <a class="nav-link active" href="">Home</a>
          </li>

          <template v-if="!auth">
            <li class="nav-item">
              <router-link class="nav-link" :to="{name : 'login'}" >Sign in</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{name : 'register'}" >Sign up</router-link>
            </li>
          </template>

          <template v-else>
            <li class="nav-item">
              <router-link :to="{ name: 'create' }" class="nav-link">
                <i class="ion-compose"></i>&nbsp;New Post
              </router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">
                <i class="ion-gear-a"></i>&nbsp;Settings
              </a>
            </li>
             <li class="nav-item">
              <router-link :to="{ name: 'profile', params: {username: user.username}}" class="nav-link">
                {{ user.username }}
              </router-link>
            </li>
          </template>

        </ul>
      </div>
    </nav>
</template>

<script>
export default {
  computed: {
    auth () {
      return this.$store.getters.isAuthenticated
    },
    user () {
      return this.$store.getters.getUser
    }
  }
}
</script>
