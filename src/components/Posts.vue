<template>
  <div>
    <div class="posts">
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
.posts {
  display: flex;
  justify-content: space-between;
}
.post{
  border: 2px dashed black;
  width: 25%;
}
.post > h2 {
  margin: 0;
  font-family: 'Oswald', cursive;
}
.post > h2::first-letter {
  text-transform: uppercase;
}
.post > p {
  margin: 0;
  font-family: 'Bad Script', cursive;
  font-size: 20px;
}
.post > p:first-letter {
  text-transform: uppercase;
  font-family: 'Kelly Slab', cursive;
  font-size: 200%
}
</style>