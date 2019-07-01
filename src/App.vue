<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div> -->
    <app-header></app-header>
    <router-view/>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from '@/components/basicLayout/Header.vue'
import Footer from '@/components/basicLayout/Footer.vue'

export default {
  components: {
    AppHeader: Header,
    AppFooter: Footer
  }
};
</script>


<style lang="less">
</style>
