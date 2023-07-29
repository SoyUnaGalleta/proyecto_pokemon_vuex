<template>
    <div id="HomePokemon">
      <img alt="logo" src="../assets/1597796080-pikachu-1597796080.png">
      <InfoComponent />
    </div>
</template>
  
 <script>
import InfoComponent from '../components/InfoComponent.vue'
  
export default {
  name: 'ConsultaView',
  components: {
    InfoComponent,

  }
}
</script>
  
<style scoped>
#HomePokemon {
  margin: auto;
  width: 90%;
}
.contenedor {
  display: flex;
}
.search {
  width: 40%;
}
.see {
  width: 60%;
}
img {
  max-width: 490px;
}
</style>
  