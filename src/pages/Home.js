import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard';
import s from "../styles/home.module.scss";

const Home = ({products}) => {
  const [produtos, setProdutos] = useState();
  
  useEffect(() => {
    setProdutos(products);
  }, [products])

  return (
    <div>
      <header>Home</header> 
      <div className={s.container}>
            {produtos?.map((produto) => (
              <ProductCard 
              title={produto.title}
              image={produto.image}
              path={`/product/${produto.id}`}
              codigo={produto.id}
              description={produto.description}
              price={produto.price}
              ></ProductCard>
            )
          )
        }
      </div>
    </div>
  )
}


export default Home