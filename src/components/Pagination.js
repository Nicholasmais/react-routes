import React from 'react'
import ProductCard from './ProductCard'
import s from "../styles/Pagination.module.scss";
import { useState } from 'react'
import { useEffect } from 'react'

const Pagination = ({arr,itens_number}) => {
  const [arrayItens, setArrayItens] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const sizeArray = Object.keys(arr).length;
  const numberPages = sizeArray % itens_number === 0 ? ~~(sizeArray / itens_number) : ~~(sizeArray / itens_number) + 1;

  const handleClick = (pageNumber) => {
    for (let i = 0; i < numberPages; i++){
      document.getElementById(`button_${i}`).style.color = "#FFF";
      document.getElementById(`button_${i}`).style.backgroundColor = "#774360";

    }
    document.getElementById(`button_${pageNumber}`).style.color = "#4C3A51";
    document.getElementById(`button_${pageNumber}`).style.backgroundColor = "#B25068";
  }

  useEffect(()=>{
    setCurrentPage(0);
    setArrayItens([]);
    for (let i = 0; i < numberPages; i++){
      const new_page = [arr.slice(i*itens_number,itens_number*(i+1))];
      setArrayItens(prevItens => [...prevItens, new_page])
      };
    setIsLoading(false);
  },[arr, itens_number])
  

  return (
    <div className={s.pagination}>
      <div className={s.pagesBar}>
            {[...Array(numberPages).keys()].map(pageNumber => (
              <button key={`pageNumber_${pageNumber+1}`} value={pageNumber} id={`button_${pageNumber}`}
              onClick={(e) => {
                setIsLoading(true);
                handleClick(pageNumber);
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