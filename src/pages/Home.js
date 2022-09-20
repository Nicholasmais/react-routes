import React, { useState } from 'react'
import { useEffect } from 'react';
import Pagination from '../components/Pagination';
import SelectFilter from '../components/SelectFilter';

const Home = ({allProducts, allCategories}) => {
  const [products, setProducts] = useState(allProducts);
  const [filter, setFilter] = useState("");
  const [itens_number, setItens_number] = useState(6);
  const itensNumber = [1,2,3,4,5,6,7,8,9,10]
  const changeFilter = (option) => {
    setFilter(option);
  }

  const changeItensNumber = (number) => {
    setItens_number(number);
  }

  useEffect(() => {
    setProducts(allProducts.filter(obj => filter ? obj.category === filter : obj.category !== filter));
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