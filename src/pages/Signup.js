import React from 'react'
import '../assets/css/signup.css';
import { Link } from 'react-router-dom';

export default function SignUp() {
    return (
        <>
        <div className='main-container bg-light'>
        <form class="forms">
                <p class="title">Register </p>
                <p class="message">Signup now and get full access to our app. </p>
                <div class="flex">
                    <label>
                        <input class="input" type="text" placeholder="" required=""/>
                            <span>Firstname</span>
                    </label>

                    <label>
                        <input class="input" type="text" placeholder="" required=""/>
                            <span>Lastname</span>
                    </label>
                </div>

                <label>
                    <input class="input" type="email" placeholder="" required=""/>
                        <span>Email</span>
                </label>

                <label>
                    <input class="input" type="password" placeholder="" required=""/>
                        <span>Password</span>
                </label>
                <label>
                    <input class="input" type="password" placeholder="" required=""/>
                        <span>Confirm password</span>
                </label>
                <button class="submit">Submit</button>
                <p class="signin">Already have an acount ? <Link to="/login">Signin</Link> </p>
            </form>
        </div>
          
        </>
    )
}
