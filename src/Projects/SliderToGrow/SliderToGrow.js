import React, {useState, useEffect}  from 'react'
import SliderComp from './SliderComp'
import Title from '../../components/Title'
export default function SliderToGrow() {
    const [slideValue, setSlideValue] = useState(0);
 const handleSliderValueChange = (e)=>{
  setSlideValue(e.target.value)
 }
 let bgColor;
 let textColor;
 if(slideValue < 25){
    bgColor = "red";
    textColor = "red";
 }
 if(slideValue < 25 && slideValue <= 50){
    bgColor = "blue";
 }

 if(slideValue > 51 && slideValue <= 75){
    bgColor = "green";
    textColor =  "white";
 }
 if(slideValue > 75){
    bgColor = "orange";
    textColor =  "white";
 }

 if(slideValue == 100){
    bgColor = "red";
 }

 
  return (
    <div className='container text-center'>
        <Title text={"Slide To Grow"}/>
      <SliderComp 
      setValue = {slideValue} 
      handleInput={handleSliderValueChange} 
      bgColor= {bgColor}
      textColor={textColor}
      /> 
    </div>
  )
}
