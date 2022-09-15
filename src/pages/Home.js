import React, { useEffect, useState } from 'react'
import {fetchProducts} from '../services/FetchData.js';

const Home = () => {
  const [produtos, setProdutos] = useState([{codigo: '', descricao: '', valor:''}]);

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
          <thead>
            <tr>
              <td>Descrição</td>
              <td>Valor</td>
              <td>Código</td>
            </tr>
          </thead>
          <tbody>
            {produtos.map((produto, i) => (
            <tr key={`row-${i}`}>
              <td key={`descricao-${i}`}>{produto.descricao}</td>
              <td key={`valor-${i}`}>{produto.valor}</td>
              <td key={`codigo-${i}`}>{produto.codigo}</td>      
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}


export default Home