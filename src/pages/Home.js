import React, { useEffect, useState } from 'react'
import s from "../styles/home.module.scss";

const Home = ({products}) => {
  const [produtos, setProdutos] = useState();
  
  useEffect(() => {
    setProdutos(products);
  }, [])

  return (
    <div>
      <header>Home</header> 
      <div className={s.container}>
            {produtos?.map((produto, i) => (
            <div key={`product-${produto.id}`} className={s.product}>
              <div className={s.left}>
                <a href={produto.image} target="_blank" ><img src={produto.image} alt={produto.title} /></a> 
                <a href={produto.image} target="_blank"><div key={`titulo-${i}`} className={s.box}><div><b>{produto.title}</b></div></div></a>
                <div key={`valor-${i}`} className={s.box}>${produto.price}</div>
              </div>
              <div className={s.right}>
                <div key={`descricao-${i}`} className={s.box}>{produto.description}</div>
              </div>
            </div>
            )
          )
        }
      </div>
    </div>
  )
}


export default Home