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
