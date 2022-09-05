import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom';
import {fetchProducts} from '../services/FetchData.js';

const Home = () => {
  const [produtos, setProdutos] = useState();

  useEffect(() => {
    const getData = async () => {
    const res = await fetchProducts();
    setProdutos(res.data);
    }
    getData();
  },[]);

  return (
    <div>
      <header>Home</header> 
      <div>
      <table style={{width:'100%'}}>
          <tr>
            <td>Descrição</td>
            <td>Valor</td>
            <td>Código</td>
          </tr>
      
        {produtos.map(produto => (
        
        <tr>
          <td>{produto.descricao}</td>
          <td>{produto.valor}</td>
          <td>{produto.codigo}</td>      
        </tr>
          
        ))}
        </table>
      </div>

    </div>
  )
}


export default Home