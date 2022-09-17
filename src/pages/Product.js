import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import BoxMessage from '../components/BoxMessage';
import LoadingCircle from '../components/LoadingCircle';
import ProductCard from '../components/ProductCard';
import { fetchProductById } from '../services/FetchData';
import s from "../styles/Pagination.module.scss";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getProduct = async() => {
      await fetchProductById(id).then(res =>{
          setProduct(res.data);
        }
      );
      setIsLoading(false);
    }
    getProduct();
  }, [])
  
  return (
    <div>
      {isLoading && <LoadingCircle></LoadingCircle>}
      {
      !isLoading && product.length !== 0 &&
      <div className={s.pagination}>
        <div className={s.container} style={{gridTemplateColumns:'1fr',paddingTop:'2em'}}>
          <ProductCard
            title={product.title}
            image={product.image}
            path={`/product/${product.id}`}
            codigo={product.id}
            description={product.description}
            price={product.price}
          ></ProductCard>
        </div>
      </div>
      }
      {
      !isLoading && product.length === 0 &&
        <BoxMessage color="#FBCABE">
        </BoxMessage>
      }
    </div>
  )
}

export default Product