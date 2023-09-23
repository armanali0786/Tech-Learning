import React from 'react'

function Button({text="click", btnClass, icon, onClick}) {
  return (
    <button className={`btn ${btnClass}`} onClick={onClick}>
      {/* {icon} */}
      { text}
    </button>
  )
}

export default Button
