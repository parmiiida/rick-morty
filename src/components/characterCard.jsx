import React from 'react'
import { heart } from '../assets'
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, selectFavorites } from '../features/favoritesSlice';
import { removeFavorite } from '../features/favoritesSlice';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const CharacterCard = ({data ,onDelete , showButtons = true , showDeleteButton = false}) => {

  const [isAdded, setIsAdded] = useState(false);


  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const { id } = useParams();

  const handleClick = () => {
    if (favorites.some(character => character.id === data.id)) {
      alert('This character is already in your favorites.');
    } else if (favorites.length >= 10) {
      alert('You have exceeded the number of characters to add as favorites. You must remove another character from favorites.');
    } else {
      dispatch(addFavorite(data));
      setIsAdded(true);
    }
  };

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
        <div className='flex pt-6 gap-3'>
          {showButtons && (
          <div >
            <button onClick={handleClick} className='select-none rounded-full bg-gradient-to-tr from-green-400 to-gray-300 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none '>
              {isAdded ? 'Added' : 'Add to favorites'}
            </button>
          </div>
          )}
         {showDeleteButton && (
        <button className='select-none rounded-full bg-gradient-to-tr from-yellow-400 to-red-300 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ' onClick={onDelete}>
          Delete
        </button>
      )}
        </div>

       </div>

    </div>

  )
}

export default CharacterCard
