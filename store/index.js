/**
 * Store is using 'Vuex' to pre-fetch data from backend before mounting the template
 * Store contains many modules.
 * Complete references: https://ssr.vuejs.org/guide/data.html#data-store
 */
import Vue from "vue";
import Vuex from "vuex";
import api from "./api";

Vue.use(Vuex);

export function createStore() {
  return new Vuex.Store({
    state: {
      parameter: {},
      parameters: []
    },

    actions: {
      getParamater({ commit }, id) {
        return api
          .getParameter(id)
          .then(response => {
            var data = response.data;
            commit("setParameter", { id, data });
          })
          .catch(error => {
            console.log(error);
          });
      },
      getParametersByGroup({ commit }, groupName) {
        return api
          .getParametersByGroup(groupName)
          .then(response => {
            var data = response.data.items;
            commit("setParameterByGroup", { groupName, data });
          })
          .catch(error => {
            console.log(error);
          });
      },
      getParametersBulk({ commit }, key, arrGroupName) {
        return api
          .getParametersBulk(arrGroupName)
          .then(response => {
            var data = response.data.items;
            console.log(response.data.items);
            commit("setParameterBulk", { key, data });
          })
          .catch(error => {
            console.log(error);
          });
      }
    },

    mutations: {
      setParameter(state, { id, data }) {
        Vue.set(state.parameter, id, data);
      },
      setParameterByGroup(state, { groupName, data }) {
        Vue.set(state.parameters, groupName, data);
      },
      setParameterBulk(state, { key, data }) {
        Vue.set(state.bulkParams, key, data);
      }
    },

    getters: {}
  });
}
