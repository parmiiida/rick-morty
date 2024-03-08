import React from 'react'
import {logo , glass ,heart} from '../assets';


const Navbar = () => {
  return (
    <header className='w-full px-10'>
        <nav className='flex  justify-between items-center px-1 md:px-20 px-30 py-0'>
            <a href='/' className='flex items-center h-[150px] w-[150px] '>
            <img src={logo} alt="Logo" />
            </a>
            <div>
            <form className='flex items-center justify-start max-sm:flex-col w-full relative max-sm:gap-4 max-w-3xl ' >
              <div className="flex-1 max-sm:w-full flex justify-start items-center relative">
                <input
                  type="text"
                  name="model"
                  // value={model}
                  // onChange={(e) => setModel(e.target.value)}
                  placeholder="search"
                  className="w-full h-[48px] pl-12 p-4 bg-[#e1fae1] rounded-r-full rounded-l-full max-sm:rounded-full outline-none text-sm"
                />
                  <button className='cursor-pointer'>
                    <img
                    src={glass}
                    alt="search"
                    className="absolute items-center rounded-full bg-white  justify-center w-[40px] h-[43px] -mt-5 z-10 -ml-5"
                    />
                  </button>
                  <a href='/' >
                    <img src={heart} alt='heart' className='w-[50px] mt-2 ml-14'/>
                  </a>

              </div>
            </form>
            </div>

        </nav>

    </header>
  )
}

export default Navbar

