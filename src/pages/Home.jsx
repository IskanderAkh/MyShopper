import React, { useState } from 'react'
import Header from '../components/Header/Header'
import NewCollection from '../components/NewCollection/NewCollection'
const Home = () => {
  const [selected, setSelected] = useState("home");

  
  return (
    <>
    <div className='home'>
        <Header selected={selected} />
    </div>
        <NewCollection category='newcollection'  />
    </>
  )
}

export default Home