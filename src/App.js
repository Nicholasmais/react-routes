import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';
import { fetchProducts } from './services/FetchData';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [product, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
    await fetchProducts().then(res => {
      setProducts(res.data);
      setIsLoading(false);
        }).catch(err =>{
          setProducts({codigo: '', descricao: '', valor:''});
          });
    }
    getData();
  },[]);

  return (
    <div className="App">
      <header><h1>React Routes</h1></header>
      <BrowserRouter>
        <Navbar></Navbar>
          <Routes>
            <Route path="/" element = {!isLoading && <Home products={product}></Home>}></Route>
            <Route path="/about" element={<About></About>}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
