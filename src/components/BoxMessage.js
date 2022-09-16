import React from 'react'

const BoxMessage = ({color}) => {
  return (

    <div style={{backgroundColor:`${color}`,
    borderRadius:'5px',
    width:"250px",
    margin:"0 auto",
    paddingBottom:"1.5rem"
    }}>

      <h3>Produto não encontrado.</h3>
      <div>
        Tente Novamente.
      </div>
    </div>
  )
}

export default BoxMessage