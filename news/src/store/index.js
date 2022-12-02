import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
	  tokenusermo:null
  },
  getters: {},
  mutations: {
	  setToken(state,data){
		  state.tokenusermo = data
	  }
  },
  actions: {},
  modules: {},
});
