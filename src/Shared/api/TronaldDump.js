import Axios from 'axios'

const TronaldDump = Axios.create({
    baseURL: 'https://api.tronalddump.io/random/quote'
})

export default TronaldDump