<template>
    <div class="posts">
      <div class="post" @click="bookmark(post)" v-for="post in allPosts" :key="post.id">
        <h2>{{post.title}}</h2>
        <p>{{post.body}}</p>
      </div>
    </div>
</template>

<script>
import {mapGetters} from "vuex";
export default {
  computed: mapGetters(['allPosts']),
  async mounted() {
    this.$store.dispatch('fetchPosts')
  },
  methods: {
    bookmark(post) {
      this.$store.commit('addToBookmarkList', post)
    }
  }
}
</script>

<style lang="scss">
.posts {
  display: flex;
  // justify-content: space-between;
  flex-wrap: wrap;
  align-content: stretch;
  align-items: baseline;
  border: 2px solid black;
  margin-top: 8px;
  }
.post{
  // border: 2px dashed black;
  margin: 1em;
  min-width: 14em;
  max-width: 20%;
  height: auto;
  padding: 1em;
  background-color: #cebb92
}
.post > h2 {
  margin: 0;
  font-family: 'Kelly Slab', cursive;
  font-weight: bold;
  margin-bottom: 0.5em;
}
.post > h2:first-letter {
  text-transform: uppercase;
}
.post > p {
  margin: 0;
  font-family: 'Marck Script', cursive;
  font-size: 20px;
}
.post > p:first-letter {
  text-transform: uppercase;
  font-family: 'Kelly Slab', cursive;
  font-size: 150%
}
</style>