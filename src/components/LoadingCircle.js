import React from 'react'
import s from "../styles/LoadingCircle.module.scss";
const LoadingCircle = () => {
  return (
    <>
      <div className={s.circle}></div>
      <div className={s.span}>Carregando</div> 
    </>
  )
}

export default LoadingCircle