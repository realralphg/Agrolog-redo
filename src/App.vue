<template>
  <v-app>
    <Navbar />
    <v-main>
      <v-app class="grey lighten-4">
        <transition name="slide-fade">
          <router-view></router-view>
        </transition>
      </v-app>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  name: 'App',
  components: {
    Navbar,
  },
  data: () => ({}),
}
</script>

<style lang="scss">
// @import url("https://fonts.googleapis.com/css2?family=Geo&family=Georama:wght@300;400;500;700;900&family=Lato:wght@300;400;700;900&family=Montserrat:wght@300;400;500;700&family=Mulish:wght@300;400;700&family=Roboto:wght@300;400;500;700;900&display=swap");

// body {
//   font-family: "Roboto", sans-serif !important;
// }
.slide-fade-enter-active {
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}
.slide-fade-leave-active {
  transition: all 0.2s ease-out;
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(1000px);
  opacity: 0;
}
</style>
