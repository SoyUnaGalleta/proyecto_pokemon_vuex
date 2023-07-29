<template>
  <div id="ConsultaView">
    <div class="contenedor">
      <div class="search">
        <SearchPokemonComponent />
      </div>
      <div class="see">
        <SeePokemonComponent />
      </div>
    </div>
  </div>
</template>

<script>
import SearchPokemonComponent from '../components/SearchPokemonComponent.vue'
import SeePokemonComponent from '../components/SeePokemonComponent.vue'

export default {
  name: 'ConsultaView',
  components: {
    SeePokemonComponent,
    SearchPokemonComponent
  },
  methods: {
  }
}
</script>

<style scoped>
#ConsultaView {
  margin: auto;
  width: 90%;
}
.contenedor {
  display: flex;
  flex-wrap: wrap;
}

.search {
  width: 40%;
}
.see {
  width: 60%;
}

@media (max-width: 900px) {
  .search {
    width: 100%;
  }
  .see {
    width: 100%;
  }

}
</style>
