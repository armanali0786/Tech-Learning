import React from 'react'

const Title = (props) => {
  return  (
    <h1 className='container d-flex ' style={{marginTop : "60px"}}>
      {props.text}
    </h1>
  )
}

export default Title
