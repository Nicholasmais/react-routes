import axios from 'axios'

const url = "http://192.168.0.7:3000"
const api = axios.create({
  baseURL: url
})

export const fetchProducts = async () => await api.get("/produtos");
