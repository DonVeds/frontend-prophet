import Vue from 'vue'
import Vuex from 'vuex'
import posts from './modules/posts.js'
import data from '../assets/data.json'
import bookmarks from './modules/bookmarks.js'


Vue.use(Vuex)

export default new Vuex.Store({
  actions: {
    fetchInfo(ctx) {
      ctx.commit("updateInfo");
    },
    initialiseStorage(ctx) {
      ctx.commit("initialiseBookmarks");
      ctx.commit("updateInfo");
    }
  },
  mutations: {
    updateInfo(state) {
      state.info = data;
    }
  },
  state: {
    info: []
  },
  getters: {
    allInfo(state) {
      return state.info;
    }
  },
  modules: {
    posts,
    bookmarks
  }
});
