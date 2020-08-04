import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Pretty:0,
    variable:0
  },
  mutations: {
    setPretty(state,data){
      state.Pretty=data
    },
    setvariable(state,data){
      state.variable=data
    }

  },
  actions: {
  },
  modules: {
  }
})
