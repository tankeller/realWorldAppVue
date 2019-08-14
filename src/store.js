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
    },
    createArticle ({ commit }, articleData) {
      if (!this.state.idToken) {
        console.log('not allowed');
        return
      }
      axios.defaults.headers.common['Authorization'] = `Token ${this.state.idToken}`;
      axios.post('https://conduit.productionready.io/api/articles', articleData)
        .then(res => {
          console.log(res.data);
        })
        .catch(error => {
          console.log(error);
        })
    }
  },
  getters: {
    isAuthenticated (state) {
      return state.idToken !== null
    }
  }
})
