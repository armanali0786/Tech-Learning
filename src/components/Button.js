import React from 'react'

function Button({text="click", btnClass, icon, onClick}) {
  return (
    <button className={`btn ${btnClass}`} onClick={onClick} style={{background:"#37517e", color:"white"}}>
      {icon}
      { text}
    </button>
  )
}

export default Button
