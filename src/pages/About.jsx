import React from 'react'
import { Link } from 'react-router-dom'
import AboutBrand from '../components/AboutBrand/AboutBrand'
const About = () => {
  return (
    <>

      <div>
        <h1 className='current-location'>О бренде</h1>
        <div className='current-location-link'><a href='/'>Главная </a> — <p> О бренде</p> </div>
      </div>

      <AboutBrand />
    </>
  )
}

export default About