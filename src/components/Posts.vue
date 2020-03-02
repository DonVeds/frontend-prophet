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
        this.$store.commit("removeFromBookmarkList", post);
        this.$set(post, "bookmarked", false);
      } else {
        this.$store.commit("addToBookmarkList", post);
        this.$set(post, "bookmarked", true);
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

<style scoped lang="scss">

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
  max-width: 20%;
  height: auto;
  padding: 1em;
  background-color: $bgc_post;
  border: 2px solid transparent;
}

@include width_tablet {
  .post{
    max-width: 42%;
    min-width: 30%;
  }
}

@include width_laptop {
  .post{
    min-width: 25%;
  }
}

@include width_phone {
  .post{
    max-width: 240px ;
    min-width: 80%;
  }
}

.post > h2 {
  margin: 0;
  @include font_post-h;
  margin-bottom: 0.5em;
}
@include width_phone {
  .post > h2 {
    font-size: 1.1em;
  }
}


.post > h2:first-letter {
  text-transform: uppercase;
}
.post > p {
  margin: 0;
  @include font_post-p;
  font-size: 1.2em;
}

@include width_phone {
  .post > p {
    font-size: 1em;
  }
}


.post > p:first-letter {
  @include font_post-fl;
  font-size: 150%;
}



</style>
