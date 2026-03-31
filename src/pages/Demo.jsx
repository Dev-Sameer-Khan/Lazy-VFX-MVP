import React from 'react'
import Experience from '../components/3d/Experience'
import BG from '../components/layout/BG'
import Navbar from '../components/layout/Navbar'

const Demo = () => {
  return (
    <div className='w-full h-screen bg-[#010101]'>
        <Navbar/>
        <BG/>
        <Experience debug stats/>
    </div>
  )
}

export default Demo