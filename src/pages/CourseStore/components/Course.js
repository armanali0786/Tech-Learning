import React, { useState, useEffect } from 'react'
import Button from '../../../components/Button'
import { CurrencyContext } from '../context/currencies-context'
import { useNavigate } from 'react-router-dom'
export default function Course({ course,openDialog }) {

    const  navigate = useNavigate();

    const currency = React.useContext(CurrencyContext);

    const { title, img, price } = course
    const contextPrice = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: currency.code,
    }).format(price * currency.conversionRate);

    //Change course background based on Cur
    const [courseBg, setCourseBg] = useState();

    useEffect(() => {
        if (currency.code === "USD") {
            setCourseBg("bg-info")
        }
        if (currency.code === "EUR") {
            setCourseBg("bg-light")
        }
        if (currency.code === "GBP") {
            setCourseBg("bg-danger")
        }
    }, [currency.code])

    const handleCourseDetails = () => {
        navigate('/course-details'); // Use navigate to navigate to '/course-details'
    };

    return (
        <li className='card  mb-2' style={{ width: 350 , cursor:"pointer"}} onClick={handleCourseDetails}>
            <div className={`card-header ${courseBg}`}>{title}</div>
            <img src={img} alt='course img' style={{ height: "100%" }} />
            <p className='card-body'>
            Become a Master in Development with just ONE course.
            </p>
            <div className={`card-footer ${courseBg} d-flex justify-content-between`}>
                <h4>{contextPrice}</h4>
                <Button  btnClass={"btn-success"} text={"Buy"} onClick={openDialog} />
            </div>
        </li>
    )
}
