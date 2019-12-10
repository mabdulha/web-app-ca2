import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    token: null,
    owner: null,
    isOwnerLoggedIn: false
  },
  mutations: {
    setToken (state, token) {
      state.token = token
      if (token) {
        state.isOwnerLoggedIn = true
      } else {
        state.isOwnerLoggedIn = false
      }
    },
    setOwner (state, owner) {
      state.owner = owner
    }
  },
  actions: {
    setToken ({commit}, token) {
      commit('setToken', token)
    },
    setOwner ({commit}, owner) {
      commit('setOwner', owner)
    }
  }
})

export default store
