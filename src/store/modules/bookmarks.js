export default {
    actions: {},
    mutations: {
        addToBookmarkList(state, post) {
            let found = state.bookmarkList.find(
                bookmarkedPost => bookmarkedPost.id == post.id
            );

            if (!found) {
                state.bookmarkList.push(post);
                state.bookmarkCount++;
            }
        },
        removeFromBookmarkList(state, post) {
            let found = state.bookmarkList.find(
                bookmarkedPost => bookmarkedPost.id == post.id
            );

            if (found) {
                state.bookmarkList.pop(post);
                state.bookmarkCount--
            }
        }
    },
    state: {
        bookmarkList: [],
        bookmarkCount: 0
    },
    getters: {
        allBookmarks(state) {
            return state.bookmarkList;
        },
        showBookmarkCount(state) {
            return state.bookmarkCount;
        }
    }
};
