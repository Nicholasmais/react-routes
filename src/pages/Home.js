import React, { useState } from 'react'
import { useEffect } from 'react';
import Pagination from '../components/Pagination';
import SelectFilter from '../components/SelectFilter';

const Home = ({allProducts, allCategories}) => {
  const [products, setProducts] = useState(allProducts);
  const [filter, setFilter] = useState("");

  const initialItensNumber = window.innerWidth >= 480 ? 6 : 2
  const itensNumber = [1,2,3,4,5,6,7,8,9,10];
  const [itens_number, setItens_number] = useState(initialItensNumber);

  const changeFilter = (option) => {
    setFilter(option);
  }

  const changeItensNumber = (number) => {
    number ? setItens_number(number) : setItens_number(initialItensNumber) ;
  }

  useEffect(() => {
    function fetchProducts(){
      setProducts(allProducts.filter(obj => filter ? obj.category === filter : obj.category !== filter));
      };
    fetchProducts();
  }, [filter])

  return (
    <div>
        <SelectFilter changeValue = {changeFilter} items={allCategories} filterFor={"produto"}></SelectFilter>
        <SelectFilter changeValue = {changeItensNumber} items={itensNumber} filterFor={"número de produtos"}></SelectFilter>
        <Pagination arr={products} itens_number = {itens_number} filter = {filter}></Pagination>
    </div>
  )
}

export default Home