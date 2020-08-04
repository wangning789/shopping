import Vue from 'vue'
import Vuex from 'vuex'
import api from '../http/api'


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
    },
    getdata(){
      api.ShoppingData().then(res=>{
        console.log(res,'123')
        if(res.code===200){
          this.$state.variable=res.shopList.length
        }
      }).catch()
    }
  },
  actions: {
  },
  modules: {
  }
})
