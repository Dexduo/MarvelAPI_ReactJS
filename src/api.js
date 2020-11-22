import axios from 'axios'

//ts = 1605968745
//apikey = c83552d991ad4b4ca4b84717aa0b3c5d

const api = axios.create({
    baseURL: 'http://gateway.marvel.com/v1/public/characters?ts=1605968745&apikey=c83552d991ad4b4ca4b84717aa0b3c5d&hash=50b5420d36956c3a3e47433a14ae1859&limit=20'
})

export default api