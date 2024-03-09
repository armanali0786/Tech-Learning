import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { coursesDB } from '../CourseStore/db/coursesDB';
import ProgramList from '../../data/ProgramList';
import Button from '../../components/Button';
import { FaArrowRight } from "react-icons/fa";
export default function CourseItems() {
  const [courseBg, setCourseBg] = useState();

  const navigate = useNavigate();
  const handleCourseDetails = () => {
    navigate('/course-details'); // Use navigate to navigate to '/course-details'
  };

  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (index) => {
    setSelectedItem(index);
  };

  return (
    <>
      <div className='row'>
        <div className='col-3'>
        {
          ProgramList.map((program, index) => (
          <ul key={index} >
            <li 
             className={`text-black p-2 d-flex justify-between text-center rounded-sm cursor-pointer ${selectedItem === index ? 'bg-slate-500 text-white' : ''}`}
            onClick={() => handleItemClick(index)}
            >{program} 
              <span><FaArrowRight/></span>
            </li>
          </ul>
            ))
          }
        </div>
        <div className='row col-9'>
          {
            coursesDB.slice(0, 4).map((item, index) => (
              <ul className='col-6' key={index}>
                <li className='card mb-2 cursor-pointer w-80 rounded-lg'>
                  {/* <div className={`card-header ${courseBg}`}>{item.title}</div> */}
                  <img src={item.img} alt='course img' style={{ height: "100%" }} onClick={handleCourseDetails} />
                  <p className='card-body'>
                    Become a Master in Development with just ONE course.
                  </p>
                  <div className={`card-footer bg-light ${courseBg} d-flex justify-content-between`}>
                    <h4>{item.price}</h4>
                    <Button btnClass={"btn-success"} text={"Buy"} onClick={handleCourseDetails}/>
                  </div>
                </li>
              </ul>

            ))
          }
        </div>
      </div>
    </>
  )
}
