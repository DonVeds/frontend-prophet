<template>
  <div id="app">
    <Header/>
    <Posts/>
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import Posts from './components/Posts.vue'

  export default {
    name: 'app',
    components: {
      Header, Posts
    }
  }
</script>

<style lang="scss">
  body {
    margin: 0;
  }
  #app {
    height: 100%;
		padding: 0 1em;
		background-color: #d5c5a4;
    padding-bottom: 20px;
	}
</style>
