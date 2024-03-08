import React from 'react'
import './assets/css/style.css';
import CourseItemList from './pages/CourseItemList';
import Store from './pages/CourseStore/Store';
import Footer from './pages/component/Footer';
import Pricing from './pages/component/Pricing';
import Category from './pages/component/Category';

import Testimonial from './pages/component/Testimonial';
import Slider from './pages/component/Slider';
export default function Dashboard() {
    return (
        <>
            <section className='section-bg'>
                <Slider />
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

            <section id="pricing" className="pricing bg-light">
                <Pricing />
            </section>
            <section id="pricing" className="section-bg">
                <div className="section-title">
                    <h2>Testimonial</h2>
                    <h5>See what others are achieving through learning.</h5>
                </div>
                <div className='d-flex'>
                <Testimonial />
                </div>
            </section>
            <Footer />
        </>
    )
}
