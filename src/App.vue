<template>
  <v-app style="background:#9bf6ff;">
    <v-app-bar
      app
      dark
      src="../src/assets/bgnb1.jpg"
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink"
          contain
          src="../src/assets/infoLogo.png"
          transition="scale-transition"
          width="160"
        />

       <!-- <h2>Information</h2> -->
      </div>

      <v-spacer></v-spacer>

      <!-- <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>open_in_new</v-icon>
      </v-btn> -->
    </v-app-bar>

    <v-main>
      <HelloWorld/>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>

<style>
.bg {
  background: #ffddc1;
}
</style>
