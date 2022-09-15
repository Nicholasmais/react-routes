import React, { useEffect, useState } from 'react'
import {fetchProducts} from '../services/FetchData.js';
import s from "../styles/home.module.scss";

const Home = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const getData = async () => {
    await fetchProducts().then(res => {
      setProdutos(res.data);
        }).catch(err =>{
            setProdutos({codigo: '', descricao: '', valor:''});
            console.log(err);
          });
    }
    getData();
  },[]);

  return (
    <div>
      <header>Home</header> 
      <div className={s.container}>
            {produtos?.map((produto, i) => (
            <div key={`product-${produto.codigo}`} className={s.product}>
              <div key={`descricao-${i}`} className={s.box}><div><b>{produto.descricao}</b></div></div>
              <div key={`valor-${i}`} className={s.box}>{produto.valor}</div>
            </div>
            ))}
      </div>
    </div>
  )
}


export default Home