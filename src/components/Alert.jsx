import React from 'react'

function Alert({text}) {
  return (
    <div className="alert alert-success" role="alert" style={{width:"100%",position:"absolute", textAlign:"center"}}>
   {text}
  </div>
  )
}

export default Alert