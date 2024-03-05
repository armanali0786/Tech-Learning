import React from 'react'
import './assets/css/style.css';
import heroImg from './assets/img/hero-img.png';
import StartButton from './components/StartButton';
import { Link } from 'react-router-dom';
import CourseItemList from './components/CourseItemList';
import Store from './pages/CourseStore/Store';
import Footer from './pages/Footer';
import Pricing from './pages/Pricing';
import Feature from './pages/Feature';
import Category from './pages/Category';
export default function Dashboard() {
    return (
        <>

            <section className='section-bg' style={{paddingTop:"95px"}}>
                <Feature />
            </section>
            <section className="about section-bg">
                <Category />
            </section>
            <section className="about section-bg" >
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>About technology</h2>
                    </div>
                    <div className="row content">
                        <CourseItemList />
                    </div>
                </div>
            </section>
            <section id="services" className="services section-bg">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Come teach with us</h2>
                    </div>
                    <Store />
                </div>
            </section>

            <section id="pricing" className="pricing">
                <Pricing />
            </section>
            <Footer />
        </>
    )
}
