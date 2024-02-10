import React from 'react'
import { Link } from 'react-router-dom'
import ContactComp from '../components/ContactComp/ContactComp'
const Contact = () => {
  return (
    <div>
      <h1 className='current-location'>Контакты</h1>
      <div className='current-location-link'><Link to='/'>Главная </Link> — <p> Контакты</p> </div>
      <ContactComp/>
    </div>
  )
}

export default Contact