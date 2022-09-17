import React from 'react'
import Pagination from '../components/Pagination';

const Home = ({products}) => {
  return (
    <div>
      <header>Home</header> 
        <Pagination arr={products} itens_number = {6}></Pagination>
      </div>
  )
}

export default Home