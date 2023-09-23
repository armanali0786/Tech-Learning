import React, { useEffect, useState } from 'react'
import Button from '../../components/Button'
import  './Bounce.css'
import { BsFillEmojiFrownFill, BsFillEmojiSmileFill } from 'react-icons/bs'
export default function DialogBox({ width = 350 }) {
    const [subscription, setSubscription] = useState({
        title: "Hello",
        description: "would you like to subscribe?",
        state: null,
        justifyContent: "space-between",
    })
    const handleSubscribe = () => {
        setSubscription({
            title: "Thank You",
            description: " for your subscription",
            state: "subscribed",
            justifyContent: "flex-end",
        })
    }
    const handleUnsubscribe = () => {
        setSubscription({
            title: "Sorry",
            description: "to see you go",
            state: "unsubscribed",
            justifyContent: "flex-end"
        })
    }
    const [icon, setIcon] = useState('');
    let iconStyle = {
        fontSize: "80px",
        justifySelf: "center",
        color:
            subscription.state === "subscribed"
                ? "rgba(59,137,90,0.4)"
                : "rgba(25,118,160,0.4)",
    }
    useEffect(() => {
        if (subscription.state === "subscribed") {
            setIcon(<BsFillEmojiSmileFill style={iconStyle} />);
            document.body.style.background = "rgba(59,137,90,0.4)"; 
        }
        if (subscription.state === "unsubscribed") {
            setIcon(<BsFillEmojiFrownFill style={iconStyle} />);
            document.body.style.background = "rgba(25,118,160,0.4)";
        }
       
    }, [subscription.state])
 
    const [bounce , setBounce] = useState('');
    
    useEffect(()=>{
        setTimeout(()=>{
            setBounce("")
        },500)
        return ()=> setBounce("bounce")
    },[subscription.state])

    return (
        <div className= {`card bg-light m-auto mt-4 ${bounce}`} style={{ width: width }}>
            <div className='card-body'>
                <div className='d-grid'
                    style={{
                        gridTemplateColumns: "2fr 1fr",
                        alignItems: "center",
                        alignSelf: "center",
                        justifyContent: "center"
                    }}
                >
                    <section>
                        <h3 className='card-title'>{subscription.title}</h3>
                        <h6 className='card-text'>{subscription.description}</h6>
                    </section>
                    <div>{icon}</div>
                </div>
            </div>
            {/* <hr /> */}
            <div className='d-flex mb-2 px-1 text-end pt-5' style={{
                width: "100%",
                justifyContent: `${subscription.justifyContent}`
            }}>
                {subscription.state === null && (
                    <Button text={"Cancel"} btnClass={"btn-info"} />
                )}
                {subscription.state === "subscribed" ? null : (
                    <Button text={"Subscribe"} btnClass={"btn-danger"}
                        onClick={handleSubscribe} />
                )}
                {subscription.state === "subscribed" ? (
                    <Button text={"Unsbscribe"} btnClass={"btn-danger btn-block w-100"} onClick={handleUnsubscribe} />
                ) : null}
            </div>
        </div>
    )
}
