import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:9000',  //Change this URL when hosting it
})

export default instance