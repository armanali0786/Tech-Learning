import React, { useState, useEffect } from 'react'
import Title from '../../components/Title'
import Button from '../../components/Button'
// import {BsfillFileEarmarkPostFill} from 'react-icons/bs'
function Testimonial() {
  const [testimonials, setTestimonials] = useState('')
  const [items, setItems] = useState('')

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${testimonials}`)
      .then(response => response.json())
      .then(json => setItems(json))
  }, [testimonials])

  return (
    <div className='container m-auto mb-2'>
      <Title text={"Testimonial app "} />
      <Button
        text={"Posts"}
        btnClass="btn-success btn-sm"
        onClick={() => setTestimonials("Posts")}
      />
      <Button
        text={"Users"}
        btnClass="btn-info btn-sm"
        onClick={() => setTestimonials("Users")}
      />
      <Button
        text={"Comments"}
        btnClass="btn-danger btn-sm"
        onClick={() => setTestimonials("Comments")}
      />
      <Title
        classes={"subtitle text-primary"}
        text={!testimonials ? "select from above " : testimonials}
      />
      {!items ? null :
        items.map((item) => {
          return <div className='card card-primary mb-2' key= {item.id}>
            {item.name && <h2 className="card-header">{item.name}</h2>}
            <div className='card-body'>
              <h4>{item.title}</h4>
              <p>{item.body}</p>
              </div>
            {item.email && 
            (
            <small className="card-footer">{item.email}</small>
            )}
              
          </div>;
        })}
    </div>
  )
}

export default Testimonial
