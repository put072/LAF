<template>
  <!-- <v-app style="background:#9bf6ff;" class="fon"> -->
  <v-app style="background:#ffffff;" class="fon">
    <v-app-bar
      app
      dark
      src="../src/assets/bgnb1.jpg"
      
    >
      <div class="d-flex align-center">
        <v-img
          to="/home"
          alt="Vuetify Logo"
          class="shrink"
          contain
          src="../src/assets/infoLogo.png"
          transition="scale-transition"
          width="160"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        to="/table"
        target="_blank"
        text
      >
        <span class="mr-2">ตารางเคสทั้งหมด</span>
        <v-icon>open_in_new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
  

</template>

<script>

export default {
  name: 'App',

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
<style>
  @import url('https://fonts.googleapis.com/css2?family=Sarabun&display=swap');
.fon {
  font-family: 'Sarabun', sans-serif;
}
</style>
