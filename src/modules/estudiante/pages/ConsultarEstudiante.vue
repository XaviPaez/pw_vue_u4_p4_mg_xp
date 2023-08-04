<template>

<DatosEstudiante/>  
</template>

<script>
import DatosEstudiante from '../components/DatosEstudiante.vue'



export default {

    components:{
        DatosEstudiante
        
    },
      mounted(){
     const{cedula}= this.$route.params
     console.log(cedula)
  }
    

}

  
</script>

<style>

</style>