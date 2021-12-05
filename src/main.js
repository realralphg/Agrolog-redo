import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import Carousel3d from "vue-carousel-3d";
// import VueAwesomeSwiper from "vue-awesome-swiper";

// import AOS from 'aos'
// import 'aos/dist/aos.css'

// import VueAnimateOnScroll from 'vue-animate-onscroll'

// Vue.use(VueAnimateOnScroll)
// Vue.use(VueAwesomeSwiper /* { default global options } */);

Vue.use(Carousel3d);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  // created() {
  //   AOS.init()
  // },
  render: (h) => h(App),
}).$mount("#app");
