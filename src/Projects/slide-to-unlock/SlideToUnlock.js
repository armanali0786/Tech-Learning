import React, { useState } from 'react'
import LockSlider from './LockSlider'
import { AiFillUnlock } from 'react-icons/ai'
import HomeScreenImg from './img/home.jpg'
import LockScreenImg from './img/moon.jpeg'
export default function SlideToUnlock() {
    const [uiProps, setUiProps] = useState({
        uiText: "Unlock Screen ",
        uiColor: "#eee",
        uiBg: `url(${LockScreenImg} )center/cover no-repeat`,
    })
    const [showLockSlider, setShowLockSlider] = useState(true);
    const [LockSiderValue, setLockSliderValue] = useState(0);
    const handleLockSliderInput = (e) => {
        const newValue = e.target.value;
        setLockSliderValue(newValue);

        if (newValue >= 100) {
            // If LockSliderValue reaches 100 or more, swap the image to HomeScreenImg
            setUiProps({
                ...uiProps,
                uiBg: `url(${HomeScreenImg}) center/cover no-repeat`,
            });

            // Hide the LockSlider and show the unlock icon
            setShowLockSlider(false);
        }
    }
    return (
        <div className="container text-center d-flex flex-column
         border-20 shadow-md "
            style={{
                height: "70vh",
                marginTop: "15vh",
                width: 340,
                border: "4px solid #000",
                background: uiProps.uiBg,
                borderRadius: "20px",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <h1 className="title" style={{ color: uiProps.uiColor }}>{uiProps.uiText}</h1>
            {showLockSlider ? (
                <LockSlider width={"250px"} handleInput={handleLockSliderInput} value={LockSiderValue} />
            ) : (
                <AiFillUnlock className='unlockIcon' />
            )}

        </div>
    )
}
