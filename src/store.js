import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const store = new Vuex.Store({
  // Using plugin to persist the login states after refresh
  plugins: [createPersistedState()],
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
