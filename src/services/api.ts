    import axios from "axios"

const API_BASE_URL_1 = 'http://127.0.0.1:8000'
const API_BASE_URL_2 = 'http://127.0.0.1:8001'

const api1 = axios.create({
    baseURL: API_BASE_URL_1,
    headers:{
        'Content-Type' : 'application/json',
    }
})

const api2 = axios.create({
    baseURL: API_BASE_URL_2,
    headers:{
        'Content-Type' : 'application/json'
    }
})

export {api1, api2}