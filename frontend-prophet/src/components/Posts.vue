<template>
  <div>
    <div class="post">
      <div class="post" v-for="post in allPosts" :key="post.id">
        <h2>{{post.title}}</h2>
        <p>{{post.body}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
export default {
  computed: mapGetters(['allPosts']),
  async mounted() {
    this.$store.dispatch('fetchPosts')
  }
}
</script>

<style lang="scss">

</style>