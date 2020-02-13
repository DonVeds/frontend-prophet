import Vue from 'vue'
import Vuex from 'vuex'
import posts from './modules/post.js'
import data from '../assets/data.json'
import bookmarks from './modules/bookmarks.js'


Vue.use(Vuex)

export default new Vuex.Store({
  actions: {
    fetchInfo(ctx) {
      let info = data;
    
      ctx.commit("updateInfo", info);
    }
  },
  mutations: {
    updateInfo(state, info) {
      state.info = info;
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
