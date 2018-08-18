
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

   	const state = {
   		test:{a:1},
   	}

   	const mutations = {
	   	UPDATE_TEST(state, params) {
	   	    state.test = params;
	   	}
   	}

   	const actions = {
	   	UPDATETEST : ({ commit,state},json)=>{
	   		return commit('UPDATE_TEST', json);
	   	}
   	}

    const getters = {
   		test: state => state.test,
    }

export default new Vuex.Store({
	 state,
	 mutations,
	 actions,
	 getters
})
