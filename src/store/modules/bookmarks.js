export default {
  actions: {},
  mutations: {
    addToBookmarkList(state, post) {
      let found = state.bookmarkList.find(
        bookmarkedPost => bookmarkedPost.id == post.id
      );

      if (!found) {
        state.bookmarkList.push(post);
      }
    },
    removeFromBookmarkList(state, post) {
      let found = state.bookmarkList.find(
        bookmarkedPost => bookmarkedPost.id == post.id
      );

      if (found) {
        state.bookmarkList.pop(post);
      }
    },
    //LocalStorage
    cacheBookmarks(state) {
      localStorage.setItem("bookmarkList", JSON.stringify(state.bookmarkList));
    },
    initialiseBookmarks(state) {
      if (localStorage.getItem("bookmarkList")) {
        // this.setState(
        //   Object.assign(
        //     state.bookmarkList,
        //     JSON.parse(localStorage.getItem("bookmarks"))
        //   )
        // );

        // console.log(JSON.parse(localStorage.getItem("bookmarks"))
        // );

        state.bookmarkList = JSON.parse(localStorage.getItem("bookmarkList"));
        // console.log(state)
      }
    }
  },
  state: {
    bookmarkList: []
  },
  getters: {
    allBookmarks(state) {
      return state.bookmarkList;
    },
    showBookmarkCount(state) {
      return state.bookmarkList.length;
    }
  }
};
