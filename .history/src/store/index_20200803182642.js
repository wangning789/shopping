import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Pretty:0,
    variable:''
  },
  mutations: {
    setPretty(state,data){
      state.Pretty=data
    }
  },
  actions: {
  },
  modules: {
  }
})
