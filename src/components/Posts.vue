<template>
    <div class="posts">
      <article class="post" @click="bookmark(post, allBookmarks)" v-for="post in allPosts" :key="post.id" :style="bookmarkStyle(post)">
        <h2>{{post.title}}</h2>
        <p>{{post.body}}</p>
      </article>
    </div>
</template>

<script>
import {mapGetters} from "vuex";
export default {
  computed: mapGetters(['allPosts', 'allBookmarks']),
  async mounted() {
    this.$store.dispatch('fetchPosts')
  },
  methods: {
    bookmark(post, allBookmarks) {
      
      if (post.bookmarked == true) {
        this.$set(post, 'bookmarked', false)
        this.$store.commit('removeFromBookmarkList', post);
      } else {
        this.$set(post, 'bookmarked', true)
        this.$store.commit('addToBookmarkList', post);
        
      }
    },
    bookmarkStyle(post) {
      let style = {};

      // let isBookmarked = allBookmarks.find(bookmark => bookmark === post).id
      // console.log('includes ' + allBookmarks.includes(post).id)

      if(post.bookmarked){
        style.border = '2px dashed black';
      }

      return style
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
  margin: 1em;
  min-width: 14em;
  max-width: 20%;
  height: auto;
  padding: 1em;
  background-color: #cebb92;
  border: 2px solid transparent; 
  user-select: none;
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