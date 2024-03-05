import React from 'react'
import CourseItems from '../data/courseItems';
import '../assets/css/course_items.css'
export default function CourseItemList() {
    return (
        <div>
            <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" >
                <h3>Learning that gets you</h3>
                <h6>Skills for your present (and your future). Get started with us.</h6>
            </div>
            <div className="buttons">
                {CourseItems.map((course_button, index) => (
                    <button key={index} className="btn">
                        <span></span>
                        <p data-start="good luck!" data-text={course_button} data-title={course_button}></p>
                    </button>
                ))}
            </div>
        </div>
    )
}
