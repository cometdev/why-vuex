import Vue from "vue";
import Vuex from "vuex";
import account from "./account/index.js";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",
  modules: {
    account,
  },
  state: {
    userId: "",
  },
  mutations: {
    setUserId(state, id) {
      //   console.log(state, value);
      state.userId = id;
    },
  },
  actions: {
    LOGIN(context, id) {
      // commit('LOG', payload);

      let url = "https://jsonplaceholder.typicode.com/users";
      let data = {
        username: id,
      };

      axios
        .post(url, data)
        .then(response => {
          // response.data;
          // console.log(response.data.username);
          let name = response.data.username;
          context.commit("setUserName", name);
          // this.$store.commit("setUserName", name);
        })
        .catch(error => console.log(error));
    },
  },
});
