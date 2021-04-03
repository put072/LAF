<template>
  <!-- <v-app style="background:#9bf6ff;" class="fon"> -->
  <v-app style="background:#ffffff;" class="fon">
    <v-app-bar
      app
      dark
      src="../src/assets/bgnb1.jpg"
      
    >
      <div class="d-flex align-center">
        <router-link to="/">
         <v-img
            alt="Vuetify Logo"
            class="shrink"
            contain
            src="../src/assets/infoLogo.png"
            transition="scale-transition"
            width="160"
          />
        </router-link>
        
      </div>

      <v-spacer></v-spacer>

      <v-btn
        :to="taBle"
        text
      >
        <span class="mr-2"> {{Nroute}} </span>
        <v-icon> {{Npage}} </v-icon>
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

  computed:{ 
    checkroute () {
      return this.$route.name
    },
    ifhome () {
      return this.checkroute === "Home"
    },
    iftable () {
      return this.checkroute === "Table"
    },
    taBle () {
      if (this.$route.name === "Table") {
        return '/'
      }
        return '/table'
    },
    Nroute () {
      if (this.$route.name === "Table") {
        return 'หน้าเเรก'
      }
        return 'เคสที่เสร็จเเล้ว'
    },
    Npage () {
      if (this.$route.name === "Table") {
        return 'home'
      }
        return 'list'
    },

  },
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
