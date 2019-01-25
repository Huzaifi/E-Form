<template>
  <!-- GLOBAL LAYOUT -->
  <v-app light>
    <v-content id="content">
      <v-scale-transition origin="bottom center 1000">
        <router-view></router-view>
      </v-scale-transition>
    </v-content>
    
    <v-fab-transition>
      <v-btn
        v-show="offsetTop > 800"
        color="primary"
        dark
        fixed
        small
        bottom
        right
        fab
        @click="$vuetify.goTo('#content', options)"
      >
        <v-icon>keyboard_arrow_up</v-icon>
      </v-btn>
    </v-fab-transition>

    <v-footer class="cardGradientBg" id="footer">
      <v-layout row wrap align-center>
        <v-flex xs12>
          <div class="white--text ml-3 font-weight-bold">
            &copy; 2018 <a class="white--text" href="http://binareka.co.id/" target="_blank" style="text-decoration:none">Binareka Tatamandiri</a>
          </div>
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
import Meta from "mixins/meta";

export default {
  mixins: [Meta],
  data: () => ({
    offsetTop: 0,
    duration: 1500,
    offset: 0,
    easing: "easeInOutCubic"
  }),
  methods: {
    onScroll(e) {
      this.offsetTop = window.pageYOffset || document.documentElement.scrollTop;
    }
  },
  computed: {
    options() {
      return {
        duration: this.duration,
        offset: this.offset,
        easing: this.easing
      };
    }
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.onScroll);
  }
};
</script>

<style scoped>
.cardGradientBg {
  background: linear-gradient(150deg, #005683 15%, #006aa1 70%, #1d8eca 94%);
}
</style>