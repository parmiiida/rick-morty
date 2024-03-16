import React from 'react'
import {logo , glass } from '../assets'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../features/searchSlice';
import { useRef } from 'react';

const Navbar = () => {
  const dispatch = useDispatch();
  const searchInputRef = useRef();

  return (
    <header className='w-full px-10'>
        <nav className='flex  justify-between items-center px-1 md:px-20 px-30 py-0'>
            <a href='/' className='flex items-center h-[150px] w-[150px] '>
              <img src={logo} alt="Logo" />
            </a>
            <div>
              <form className='flex items-center  max-sm:flex-col w-full relative max-sm:gap-4 max-w-3xl ' >
                <div className="flex-1 max-sm:w-full flex justify-center items-center relative">
                {location.pathname !== '/' && (
                  <>
                    <input
                    ref={searchInputRef}
                    type="text"
                    name="model"
                    onChange={(e) => dispatch(setSearchTerm(e.target.value))}
                    placeholder="search"
                    className="w-full h-[48px] pl-12 p-4 bg-[#e1fae1] rounded-r-full rounded-l-full max-sm:rounded-full outline-none text-sm" /><button
                      className='cursor-pointer'
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch(setSearchTerm(searchInputRef.current.value));
                      } }
                    >
                    <img
                      src={glass}
                      alt="search"
                      className="absolute items-center rounded-full bg-white  justify-center w-[40px] h-[43px] -mt-5 z-10 -ml-5" />
                     </button>
                     </>
                      )}
                  <Link to='/favorite' className='mt-2 ml-14'>
                    <button className='select-none rounded-full bg-gradient-to-tr from-green-400 to-gray-300 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'>
                      favorites
                    </button>
                  </Link>
                </div>
              </form>
            </div>
        </nav>
    </header>
  )
}

export default Navbar

