import axios from 'axios'

const url = "https://fakestoreapi.com/"
const api = axios.create({
  baseURL: url
})

export const fetchProducts = async () => await api.get("/products");
