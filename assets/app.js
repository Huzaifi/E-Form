import Vue from "vue";
import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VToolbar,
  VParallax,
  VCard,
  VForm,
  VTextField,
  VTextarea,
  VCheckbox,
  VDivider,
  VSystemBar,
  VDialog,
  VTooltip,
  VStepper,
  VSelect,
  VInput,
  VCarousel,
  VChip,
  VSubheader,
  VProgressLinear,
  transitions
} from "vuetify";
import "../node_modules/vuetify/src/stylus/app.styl";
import VueMouseParallax from "vue-mouse-parallax";
import VueResource from "vue-resource";

import App from "./App.vue";
import Components from "components/_index";

import { createStore } from "store/index";
import { createRouter } from "router/index";
import { sync } from "vuex-router-sync";

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    VParallax,
    VCard,
    VForm,
    VTextField,
    VTextarea,
    VCheckbox,
    VDivider,
    VSystemBar,
    VDialog,
    VTooltip,
    VStepper,
    VSelect,
    VInput,
    VCarousel,
    VChip,
    VSubheader,
    VProgressLinear,
    transitions
  },
  theme: {
    primary: "#005683",
    secondary: "#039BE5",
    accent: "#1976D2",
    error: "#D32F2F",
    warning: "#FFD600",
    info: "#2196f3",
    success: "#4caf50"
  },
  options: {
    minifyTheme: function(css) {
      return process.env.NODE_ENV === "production"
        ? css.replace(/[\s|\r\n|\r|\n]/g, "")
        : css;
    }
  }
});

Vue.use(VueMouseParallax);
Vue.use(VueResource);

Object.keys(Components).forEach(key => {
  Vue.component(key, Components[key]);
});

// Expose a factory function that creates a fresh set of store, router,
// app instances on each call (which is called for each SSR request)
export function createApp(ssrContext) {
  // create store and router instances
  const store = createStore();
  const router = createRouter();

  // sync the router with the vuex store.
  // this registers `store.state.route`
  sync(store, router);

  // create the app instance.
  // here we inject the router, store and ssr context to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = new Vue({
    router,
    store,
    ssrContext,
    render: h => h(App)
  });

  // expose the app, the router and the store.
  // note we are not mounting the app here, since bootstrapping will be
  // different depending on whether we are in a browser or on the server.
  return {
    app,
    router,
    store
  };
}
