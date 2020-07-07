import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    worldwide :   [],
    nationwide:   [],
    statesgraph:  [],
    districts:    []


  },

  mutations: {

    getWorldData: (state , worldwide) => {
        state.worldwide = worldwide;
    },

    getNationalData: (state , nationwide) => {
      state.nationwide = nationwide;

    },

    statesGraphData: (state , statesGraph) => {
      state.statesgraph = statesGraph;
    },

    getDistrictsData: (state , districts) => {
      state.districts = districts;
    }
  },

  actions: {
    async getData({commit}){

      //all world todays data + countrywise todays data for map
      const worldwide = await Axios.get(
        'https://api.covid19api.com/summary'
        );

      //all india per day data for graph(api.cases_time_series) + state todays data for map(api.statewise)
      const nationwide = await Axios.get(
        'https://api.covid19india.org/data.json'
      );

      //for a particular state graph
      const StatesGraph = await Axios.get(
        'https://api.covid19india.org/states_daily.json'
      );

      //for for districts bihar api.Bihar
      const districts = await Axios.get(
        'https://api.covid19india.org/state_district_wise.json'
      )

        await commit('getWorldData' , worldwide.data);

        await commit('getNationalData' , nationwide.data);

        await commit('statesGraphData' , StatesGraph.data);

        await commit('getDistrictsData' , districts.data);
    }
  },

  getters:{
    worldwide : (state) => {
      return state.worldwide;
    },
    nationwide : (state) => {
      return state.nationwide;
    },
    statesgraph : (state) => {
      return state.statesgraph;
    },
    districts : (state) => {
      return state.districts;
    },

  },

  modules: {

  }
})
