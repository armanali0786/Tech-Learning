import React,{useState} from 'react'
import Course from './Course'
import ProgramList from '../../../data/ProgramList'
import { FaArrowRight } from "react-icons/fa";

export default function Courses({ list, openDialog }) {
    const [selectedItem, setSelectedItem] = useState(null);

    const handleItemClick = (index) => {
      setSelectedItem(index);
    };
    return (
        <>
        <div className='row'>
         <div className='col-3' >
        {
          ProgramList.map((program, index) => (
          <ul key={index}>
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
        <div className='col-9'> 
            <ul className='d-flex mt-2' style={{
                flexWrap: "wrap",
                gap: 30
            }}>
                {
                    list.map((item) => (
                        <Course key={item.id} course={item}  openDialog={openDialog} />
                    ))
                }
            </ul>
        </div>
        </div>
        </>
    )
}
