import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    time: new Date(new Date().getTime()).toLocaleTimeString()
  },
  mutations: {
    setTime (state, pTime) {
      state.time = pTime
    }
  }
})

setInterval(() => {
  store.commit('setTime', new Date(new Date().getTime()).toLocaleTimeString())
}, 1000)

export default store
