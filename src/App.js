import "./styles/home.module.scss";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';
import { fetchCategories, fetchProducts } from './services/FetchData';
import { useState } from 'react';
import { useEffect } from 'react';
import Product from './pages/Product';
import LoadingCircle from './components/LoadingCircle';

function App() {
  const [product, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const getData = async () => {
    await fetchProducts().then(res => {
      setProducts(res.data);
        }).catch(err =>{
          setProducts({codigo: '', descricao: '', valor:''});
          });
    }
    getData();
  },[]);

  useEffect(() => {
    const getCategories = async () => {
    await fetchCategories().then(res => {
      setCategories(res.data);
        }).catch(err =>{
          setCategories(["Roupas"]);
          });
      setIsLoading(false);
    }
    getCategories();
  },[]);

  return (
    <div className="App">
      <header><h1>React Routes</h1></header>
      <BrowserRouter>
        <Navbar></Navbar>
        {isLoading && <LoadingCircle></LoadingCircle>}
          <Routes>
            <Route path="/" element = {!isLoading && <Home allProducts={product} allCategories={categories}></Home>}></Route>
            <Route path="/about" element={<About></About>}></Route>
            <Route path="/product/:id" element = {<Product></Product>}></Route>
            <Route path="*" element={!isLoading && <Home products={product}></Home>}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
