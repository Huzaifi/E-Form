import Vue from "vue";
import Router from "vue-router";

// The meta data for your routes
const meta = require("./meta.json");

// Include Custom Styles
require("../static/fonts/proxima-nova/fonts.css");
require("../static/css/styles.css");

// Function to create routes
// Is default lazy but can be changed
function route(path, view) {
  return {
    path: path,
    meta: meta[path],
    component: resolve => import(`pages/${view}View.vue`).then(resolve)
  };
}

Vue.use(Router);

export function createRouter() {
  const router = new Router({
    base: __dirname,
    mode: "history",
    scrollBehavior: () => ({
      y: 0
    }),
    routes: [
      route("/", "Home"),

      // ACCOUNT
      route("/registrationInfo/:id", "RegistrationInfo"),
      route("/registrationForm/:id/:ticketNumber", "RegistrationForm"),
      route("/formPerubahanDataTabungan", "FormPerubahanDataTabungan"),
      route("/formPenambahanJenisTabungan", "FormPenambahanJenisTabungan"),
      route("/tabunganKu/:id", "TabunganKu"),
      route("/tandaMataBerjangka/:id", "TandaMataBerjangka"),
      route("/tandaMataBisnis/:id", "TandaMataBisnis"),
      route("/tandaMataGold/:id", "TandaMataGold"),
      route("/tandaMataPurnabakti/:id", "TandaMataPurnabakti"),
      route("/tandaMataMyFirst/:id", "TandaMataMyFirst"),
      route("/simpeda/:id", "Simpeda"),

      // LOAN
      route("/loanForm/:id", "LoanForm"),
      route("/formPerubahanDataLoan", "FormPerubahanDataLoan"),
      route("/loanInfo/:id", "LoanInfo"),
      route("/kreditGunaBakti/:id", "KreditGunaBakti"),
      route("/kreditPraPurnaBhakti/:id", "KreditPraPurnaBhakti"),
      route("/kreditPurnaBhakti/:id", "KreditPurnaBhakti"),
      route("/backToBackLoan/:id", "BackToBackLoan"),
      // Global redirect for 404
      route("/404", "NotFound"),
      {
        path: "*",
        redirect: "/404"
      }
    ]
  });

  // Send a pageview to Google Analytics
  router.beforeEach((to, from, next) => {
    if (typeof ga !== "undefined") {
      ga("set", "page", to.path);
      ga("send", "pageview");
    }
    next();
  });

  return router;
}
