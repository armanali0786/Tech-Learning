import React from 'react'

export default function SliderComp({setValue, handleInput, bgColor, textColor}) {
    let sliderStyle ={
        appearence:"none",
        width:"40%",
        height: 50,
        // background: !bgColor ?"lightgrey" : bgColor,    
        background: "lightgrey",
        cursor: "pointer",
        opacity : "0.7",

    }
    return (
        <div className=' d-flex flex-column' style={{gap:100, alignItems:"center"}}>
            <input
             type='range' 
             min="0" 
             max={100} 
             onInput={handleInput}
              value={setValue}
              style={sliderStyle}
              />
            <div style={{

                color: !textColor ? "black": textColor,
                background: !bgColor ?"lightgrey" : bgColor,
                height:`${setValue * 3}px`,
                width:`${setValue * 3}px`,
                fontWeight:600,
                display: "flex",
                justifyContent: "center",
                alignItems:"center",
                borderRadius: "50%"
            }}  >
                <span>
                    Circle
                </span>
            </div>
        </div>
    )
}
