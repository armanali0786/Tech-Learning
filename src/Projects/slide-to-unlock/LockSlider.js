import React from 'react'
import './LockSlider.css'
export default function LockSlider({handleInput, SliderValue, width}) {
    let SliderStyle = {
        appearance: "none",
        width: !width ? "300px" : width,
        height: "50px",
        background: "rgba(188, 190, 188, 0.5)",
        outline: "none",
        borderRadius:"25px",
    }
    return (
        <input 
         type='range' 
         className='slider mb-2 '
          style={SliderStyle} 
          value={SliderValue}
          onInput={handleInput} 
          />
    )
}
