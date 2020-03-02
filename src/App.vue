<template>
  <div id="app">
    <Header/>
    <Posts/>
    <Beta/>
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import Posts from './components/Posts.vue'
  import Beta from './components/Beta.vue'

  export default {
    name: 'app',
    components: {
      Header, Posts, Beta
    },
    beforeCreate() {
      this.$store.dispatch('initialiseStorage')
    }
  }

</script>

<style lang="scss">

body {
  margin: 0;
  @include bgp_main;
}
#app {
  height: 100%;
  padding: 0 1em;
  padding-bottom: 20px;
  user-select: none;
}
</style>
