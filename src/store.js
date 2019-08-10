import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idToken: null,
    userID: null
  },
  mutations: {
    authUser (state, userData) {
      state.idToken = userData.token;
      state.userID = userData.id;
    }
  },
  actions: {
    signup ({ commit }, authData) {
      axios.post('https://conduit.productionready.io/api/users', authData)
        .then(res => {
          commit('authUser', {
            token: res.data.user.token,
            id: res.data.user.id
          });
        })
        .catch(err => {
          console.log(err);
        })
    },
    login ({ commit }, authData) {
      axios.post('https://conduit.productionready.io/api/users/login', authData)
        .then(res => {
          commit('authUser', {
            token: res.data.user.token,
            id: res.data.user.id
          });
        })
        .catch(err => {
          console.log(err);
        })
    }
  }
})
