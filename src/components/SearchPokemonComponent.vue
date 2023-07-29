<template>
    <div id="SearchPokemonComponent">
        <div class="buscador">
            <div class="titulo"><b>Buscador</b></div>
            <div class="cuerpo">
                <form>
                    <label for="txtNombre">Nombre:</label>
                    <input type="text" id="txtNombre" name="txtNombre" v-model="nombre">
                    <input type="button" id="btnBuscar" name="btnBuscar" @click.prevent="procesarBusqueda" value="buscar">
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'SearchPokemonComponent',
    data: function() {
        return {
            nombre: '',
        }
    },
    methods: {
        ...mapActions('pokemondata',['consultarPokemon']),
        procesarBusqueda: function() {
            this.consultarPokemon(this.nombre)
            this.nombre = ''
        },
    },
    computed: {},
    created() {

    },
    watch() {},
}
</script>

<style scoped>
#SearchPokemonComponent {
    text-align: left;
}
.buscador {
    border: 1px solid #ddd;
    border-radius: 5px;
    margin:20px;
}

.titulo {
    background-color: #f0f0f0;
    padding:20px 30px;
}
.cuerpo {
    padding:20px 30px;
}

form {
    line-height: 250%;
}

input[type=text] {
    box-sizing:border-box;
    width: 100%;
    border-radius: 5px;
    padding: 5px 10px;
}

input[type=button] {
    background-color: yellow;
    border: 1px solid yellow;
    border-radius: 5px;
    padding: 5px 10px;
}
input[type=button]:hover {
    border: 1px solid #333;
}
</style>