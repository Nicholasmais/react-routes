import React from 'react'

const BoxMessage = ({color, message}) => {
  return (
    <div style={{backgroundColor:`${color}`,
                  borderRadius:'5px',
                  width:"250px",
                  margin:"0 auto",
                  paddingBottom:"1.5rem"
                  }}>
      <h3>{message}</h3>
      <div>
        Tente Novamente.
      </div>
    </div>
  )
}

export default BoxMessage