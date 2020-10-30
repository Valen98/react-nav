import http from '../PokemonApi'

const searchForPokemon = (searchInput) => {
    return http.get(`/${searchInput}`)
}

export default {
    searchForPokemon}