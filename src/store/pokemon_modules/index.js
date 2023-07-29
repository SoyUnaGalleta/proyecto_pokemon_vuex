import axios from 'axios'

const pokemondata = {
    namespaced: true,
    state: {
        datosPokemon: {},
        mostrarImagen: false,
        nombresPokemones: []
    },
    getters: {
    },
    mutations: {
        CONSULTAR_POKEMON: (state, infoPokemon) => {
            state.datosPokemon = infoPokemon;
        },
        MOSTRAR_IMAGEN: (state) => {
            state.mostrarImagen = true
        },
        OCULTAR_IMAGEN: (state) => {
            state.mostrarImagen = false
        },

    },
    actions: {
        consultarPokemon: (context, nombrePokemon) => {
            context.commit('OCULTAR_IMAGEN')
            if (nombrePokemon === '' || nombrePokemon === null || nombrePokemon === undefined) {
                nombrePokemon = 'pikachu'
            }
            let url = 'https://pokeapi.co/api/v2/pokemon/' + nombrePokemon
            axios.get(url)
                .then( respuesta => {
                    context.commit('CONSULTAR_POKEMON', respuesta.data)
                    context.commit('MOSTRAR_IMAGEN')
                })
                .catch( error => console.log(error) )
        },
    },
    modules: {
    }
}

export default pokemondata