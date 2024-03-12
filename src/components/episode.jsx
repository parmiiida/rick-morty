import React from 'react'
import { Link } from 'react-router-dom';


const Episode = ({episode }) => {
  return (
    <div className=' flex flex-col flex-wrap lg:flex-row text-white p-6 my-6 mx-auto lg:w-[100%] gap-7 items-start bg-[#515457]   rounded-3xl'>
      <div className='relative '>
        <div className='py-3 flex gap-2'>
          <h1 className='font-bold hover:text-[#a3fc62] text-xl cursor-pointer'>{episode.name}</h1>
        </div>

        <h3 className='text-[#939596]'>#{episode.episode}</h3>
        <p className='py-3'>{episode.air_date}</p>
        <div className='flex flex-end'>
          <Link to={`/episode/${episode.id}`} className='pt-3'>
              <button className='select-none rounded-lg bg-gradient-to-tr from-green-400 to-gray-300 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'>
                Characters
              </button>
          </Link>
        </div>

      </div>
    </div>
  )
}

export default Episode
