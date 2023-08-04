<template>
  <div class="container">
    <h1>Inicio</h1>
    <h3>Bienvenidos al servicio de gestión de estudiantes</h3>
    <img src="../store/uce.png" alt="No se puede cargar imagen">
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 120px;
}
h1,h3{
  color: aliceblue;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    text-shadow: -1px -1px 0 #1d61ff, 1px -1px 0 #1d61ff, -1px 1px 0 #1d61ff,
    1px 1px 0 #1d61ff;
}
img {
  width: 250px;
  height: 250px;
}
</style>