import Axios from 'axios'

const PokemonApi = Axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon'
})

export default PokemonApi