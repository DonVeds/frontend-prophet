export default {
  actions: {
  },
  mutations: {
    addToBookmarkList(state, post) {
      let found = state.bookmarkList.find(bookmarkedPost => bookmarkedPost.id == post.id)

      if (!found) {
        state.bookmarkList.push(post);
        state.bookmarkCount++;
        console.log(state.bookmarkCount);
      }

    
    }
  },
  state: {
    bookmarkList: [],
    bookmarkCount: 0
  },
  getters: {
  }
};
