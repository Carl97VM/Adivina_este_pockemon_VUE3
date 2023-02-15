import axios from 'axios'

const pockemonApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon'
})

export default pockemonApi