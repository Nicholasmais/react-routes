import React from 'react'
import { Link } from 'react-router-dom';
import s from "../styles/ProductCard.module.scss";

const ProductCard = ({path, image, title, codigo, description, price}) => {
  return (
    <div>
  <div key={`product-${codigo}`} className={s.product}>
              <div className={s.left}>
                <Link to={path}><img src={image} alt={title} /></Link> 
                <Link to={path}><div key={`titulo-${codigo}`} className={s.box}><div><b>{title}</b></div></div></Link>
                <div key={`valor-${codigo}`} className={s.box}>${price}</div>
              </div>
              <div className={s.right}>
                <div key={`descricao-${codigo}`} className={s.box}>{description}</div>
              </div>
            </div>
    </div>
  )
}

export default ProductCard