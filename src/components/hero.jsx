import React from 'react'
// import CharacterCard from './characterCard'
import FetchApi from '../utils/fetchApi'




const Hero = () => {
  return (
    <div className='  hero w-full h-full items-center justify-center'>
    <div className='flex flex-col md:flex-row rounded-3xl'>
      <FetchApi/>
    </div>
  </div>
 )
}

export default Hero

