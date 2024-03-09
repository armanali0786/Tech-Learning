import React from 'react'
import './assets/css/style.css';
import CourseItemList from './pages/CourseItemList';
import Store from './pages/CourseStore/Store';
import Footer from './pages/component/Footer';
import Pricing from './pages/component/Pricing';
import Category from './pages/component/Category';

import Testimonial from './pages/component/Testimonial';
import Slider from './pages/component/Slider';
import CourseItems from './pages/component/CourseItems';
export default function Dashboard() {
    return (
        <>
            <section className='section-bg'>
                <Slider />
            </section>
            {/* <section className="about section-bg">
                <Category />
            </section> */}
            <section className="about section-bg pt-5" >
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>All the skills you need in one place</h2>
                    </div>
                    <div className="pl-3">
                        <CourseItems />
                    </div>
                </div>
            </section>
            <section id="services" className="services bg-white pt-5 pb-5">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Come teach with us</h2>
                    </div>
                    <CourseItemList/>
                </div>
            </section>

            <section id="pricing" className="pricing bg-light pt-5 pb-5">
                <Pricing />
            </section>
            <section id="pricing" className="bg-white pt-5 pb-5">
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
