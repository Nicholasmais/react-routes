import React from 'react'
import ProductCard from './ProductCard'
import s from "../styles/Pagination.module.scss";
import { useState } from 'react'
import { useEffect } from 'react'

const Pagination = ({arr,itens_number}) => {
  const [arrayItens, setArrayItens] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const numberPages = ~~(Object.keys(arr).length / itens_number) + 1;

  useEffect(()=>{
  for (let i = 0; i < numberPages; i++){
    const new_page = [arr.slice(i*itens_number,itens_number*(i+1))];
    console.log(new_page);
    setArrayItens(prevItens => [...prevItens, new_page])
    };
  setIsLoading(false);
  },[])
  
  return (
    <div className={s.pagination}>
      <div className={s.pagesBar}>
            {[...Array(numberPages).keys()].map(pageNumber => (
              <button key={`pageNumber_${pageNumber+1}`} value={pageNumber}
              onClick={(e) => {
                setIsLoading(true);
                setCurrentPage(e.target.value);
                setIsLoading(false);
               }}>
                {pageNumber+1}
              </button>
              ))
            }
      </div>
      {!isLoading && arrayItens[currentPage].map((page, i) => (
        <div className={s.container} key={`container_${i}`}>
          {
          page.map((product, iProduct) => (
                <ProductCard key={`Product_${iProduct}`} 
                  title={product.title}
                  image={product.image}
                  path={`/product/${product.id}`}
                  codigo={product.id}
                  description={product.description}
                  price={product.price}
                  >
                </ProductCard>
          ))}
        </div>
      ))}
    </div>
    )
}

export default Pagination