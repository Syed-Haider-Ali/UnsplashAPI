import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID ViKOn6FStV7fdbclnFMdvgWUn2BhUGcodec83sHeGZ0'
    }
})