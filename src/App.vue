<template>

  <NavBar />

  <router-view/>

</template>

 

<script>

import NavBar from "./modules/estudiante/components/NavBar.vue";

 

export default {

  name: "App",

  components: {

    NavBar,

  },

};

</script>

 

<style>

#app {

  font-family: Avenir, Helvetica, Arial, sans-serif;

  -webkit-font-smoothing: antialiased;

  -moz-osx-font-smoothing: grayscale;

  text-align: center;

  color: #2c3e50;

  margin-top: 60px;

}

 

body{

  background: url(./modules/estudiante/store/bg_uce.jpg);

  background-repeat: no-repeat;

  background-size: cover;

}

</style>

 