import React from 'react'
import { heart } from '../assets'


const CharacterCard = ({data , onAddToFavorites}) => {

  const handleClick = () => {
    onAddToFavorites(data);
  }
  return (
    <div className=' flex flex-col lg:flex-row  p-6 my-6 mx-auto lg:w-[45%] gap-7 items-center bg-[#515457]  rounded-3xl'>
      <div className='relative  w-[250px] rounded-3xl'>
        <img src={data.image} alt='test' className='object-contain w-[100%] rounded-3xl h-full' />
      </div>
      <div className='flex text-white flex-col '>
        <div>
          <a href='https://rickandmortyapi.com/api/character/1' className='hover:text-[#a3fc62]'>
            <h1 className='items-start text-xl font-bold'>
            {data.name}
            </h1>
          </a>
          <div className="flex font-bold items-center">
            <div className="w-3 h-3 rounded-full bg-[#915eff]"/>
            <span className='ml-3'>{data.species}</span> - <span> {data.status}</span>
          </div>
        </div>
        <div className='py-5 '>
          <span className='text-bold text-[#939596]'>last known location : </span><br/>
          <a href='/'>Fantasy world</a>
        </div>
        <div>
          <span className='text-[#939596]'>First seen in:</span><br/>
          <p>{data.location.name}</p>
        </div>
        <button onClick={handleClick}>
          <img src={heart} alt='heart' className='w-[50px] mt-8 ml-14'/>
       </button>
       </div>

    </div>

  )
}

export default CharacterCard
