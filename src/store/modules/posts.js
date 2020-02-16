export default {
  actions: {
    async fetchPosts({ commit, rootState }) {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=15"
      );
      const posts = await res.json();

      for (let post in posts) {
        if (rootState.bookmarks.bookmarkList) {
          for (let bookmark in rootState.bookmarks.bookmarkList) {
            if (rootState.bookmarks.bookmarkList[bookmark].id == posts[post].id) {
              posts[post] = rootState.bookmarks.bookmarkList[bookmark];
            }
          }
        }
      }

      commit("updatePosts", posts);
    }
  },
  mutations: {
    updatePosts(state, posts) {
      state.posts = posts;
    }
  },
  state: {
    posts: []
  },
  getters: {
    allPosts(state) {
      return state.posts;
    }
  }
};
