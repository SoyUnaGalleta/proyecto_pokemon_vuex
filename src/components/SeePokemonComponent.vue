<template>
    <div id="SeePokemonComponent">
        <div class="vista">
            <div class="titulo"><b>Pokemon</b></div>
            <div class="cuerpo">
                <div class="contenedor">
                    <div class="informacion">
                        <p><strong>ID:</strong> {{ datosPokemon.id }}</p>
                        <p><strong>Nombre:</strong> {{ datosPokemon.name }}</p>
                        <p  v-if="mostrarImagen"><strong>Tipo: </strong>
                            <p v-for="tipo in datosPokemon.types" class="tipo">
                                {{ tipo.type.name }}.
                            </p>
                        </p>
                        <p  v-if="mostrarImagen"><strong>Habilidad:</strong> {{ datosPokemon.abilities[0].ability.name }}</p>
                    </div>
                    <div v-if="mostrarImagen" class="imagenes">
                        <img v-bind:src="datosPokemon.sprites.front_default" v-bind:alt="datosPokemon.name">
                        <img v-bind:src="datosPokemon.sprites.back_default" v-bind:alt="datosPokemon.name">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState} from 'vuex';

export default {
    name: 'SeePokemonComponent',
    data: function() {
        return {  
        }
    },
    methods: {
    },
    computed: {
        ...mapState('pokemondata',['datosPokemon', 'mostrarImagen'])
    },
    watch() {}
}
</script>

<style scoped>
#SeePokemonComponent{
    text-align: left;
}
.vista {
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

.contenedor {
    display: flex;
    flex-wrap: wrap;
}
.informacion {
    width: 50%;
    line-height: 80%;
    text-transform: capitalize;
}
.imagenes {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 50%
}

.tipo {
    display: inline-block;
    padding: 0px 2px;
}

@media (max-width: 600px) {
.informacion {
    width: 100%;
}
.imagenes {
    width: 100%
}

}
</style>