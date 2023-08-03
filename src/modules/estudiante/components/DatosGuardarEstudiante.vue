<template>

  <label for="">Cedula:</label>
  <input v-model="cedula" type="text" />
  <label for="">Nombre:</label>
  <input type="text" v-model="nombre" />
  <label for="">Apellido:</label>
  <input type="text" v-model="apellido" />
  <button @click="guardarEstudiante">Guardar</button>

</template>

<script>
import { ingresarEstudianteFachada } from "../helpers/EstudianteCliente.js";
export default {
  data() {
    return {
      cedula: null,
      nombre: null,
      apellido: null,

    };
  },

  methods: {
    async guardarEstudiante() {
      const data = {
        cedula: this.cedula,
        nombre: this.nombre,
        apellido: this.apellido,
        provincia: "Pichincha",

      };

      await ingresarEstudianteFachada(data);
    },
  },
};
</script>

<style>
</style>