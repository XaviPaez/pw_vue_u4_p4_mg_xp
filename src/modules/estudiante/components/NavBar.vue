<template>
  <div class="container">
    <router-link to="/">Inicio</router-link>
    <router-link to="/consultar">Consultar</router-link>
    <router-link to="/ingresar">Ingresar</router-link>
    <router-link to="/actualizar">Actualizar</router-link>
    <router-link to="/eliminar">Eliminar</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  font-size: 18px;
  text-decoration: none;
  font-weight: bold;
  color: black;
}
a {
  padding: 0px 70px;
  position: relative;
  top: 15px;
}
.container {
  background: #27dbd5;
  position: fixed;
  padding: 10px;
  top: 0px;
  left: 0;
  width: 100%;
  height: 8%;
  border-bottom: 2px solid #00afa9;
}
</style>