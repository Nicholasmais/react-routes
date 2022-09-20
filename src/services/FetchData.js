import axios from 'axios'

const url = "https://fakestoreapi.com/"
const api = axios.create({
  baseURL: url
})

export const fetchProductById = async (id) => await api.get(`/products/${id}`);
export const fetchProducts = async () => await api.get("/products");
export const fetchCategories = async () => await api.get("/products/categories");
