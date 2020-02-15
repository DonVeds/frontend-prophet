<template>
  <div v-if="allInfo.onMainPage" class="posts">
    <article
      class="post"
      @click="bookmark(post)"
      v-for="post in allPosts"
      :key="post.id"
      :style="bookmarkStyle(post)"
    >
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </article>
  </div>
  <div v-else-if="!allInfo.onMainPage & allBookmarks.length > 0" class="posts">
    <article
      class="post"
      @click="bookmark(post)"
      v-for="post in allBookmarks"
      :key="post.id"
      :style="bookmarkStyle(post)"
    >
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </article>
  </div>
  <div v-else class="posts">
    <article class="post">
      <h2>Help Article</h2>
      <p>Please add some articles to bookmark list to see them here</p>
    </article>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: mapGetters(["allInfo", "allPosts", "allBookmarks"]),
  async mounted() {
    this.$store.dispatch("fetchPosts");
  },
  methods: {
    bookmark(post) {
      if (post.bookmarked == true) {
        this.$set(post, "bookmarked", false);
        this.$store.commit("removeFromBookmarkList", post);
      } else {
        this.$set(post, "bookmarked", true);
        this.$store.commit("addToBookmarkList", post);
      }
    },
    bookmarkStyle(post) {
      let style = {};

      if (post.bookmarked) {
        style.border = "2px dashed black";
      }

      return style;
    }
  }
};
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
.post {
  margin: 1em;
  min-width: 14em;
  max-width: 20%;
  height: auto;
  padding: 1em;
  background-color: #cebb92;
  border: 2px solid transparent;
}

.post > h2 {
  margin: 0;
  font-family: "Kelly Slab", cursive;
  font-weight: bold;
  margin-bottom: 0.5em;
}
.post > h2:first-letter {
  text-transform: uppercase;
}
.post > p {
  margin: 0;
  font-family: "Marck Script", cursive;
  font-size: 20px;
}
.post > p:first-letter {
  text-transform: uppercase;
  font-family: "Kelly Slab", cursive;
  font-size: 150%;
}
</style>
