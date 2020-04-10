import Vue from "vue";
import Vuex from "vuex";
import geo from "./modules/geo";
import home from "./modules/home";

Vue.use(Vuex);

const store = () =>
  new Vuex.Store({
    modules: {
      geo,
      home
    },
    actions: {
      async nuxtServerInit({ state, commit }, { req, app }) {
        const {
          status,
          data: { province, city }
        } = await app.$axios.get("/geo/getPosition");
        commit(
          "geo/setPosition",
          status === 200 ? { province, city } : { province: "", city: "" }
        );

        const {
          status: menuStatus,
          data: { menu }
        } = await app.$axios.get("/geo/menu");
        commit("home/setMenu", menuStatus === 200 ? menu : []);

        const {
          status: hotStatus,
          data: { result }
        } = await app.$axios.get("/search/hotPlace", {
          params: {
            city: app.store.state.geo.position.city.replace("市", "")
          }
        });
        commit("home/setHotPlace", hotStatus === 200 ? result : []);
      }
    }
  });

export default store;
