import React from 'react'
import './index.css';
import Navbar from './components/navbar';
import Hero from './components/hero';
import { BrowserRouter as Router, Route ,Routes } from 'react-router-dom';
import Favorite from './components/favorite';



const App = () => {
  return (
    <div className='flex justify-center flex-col flex-auto items-center '>

      <Router>

        <Navbar/>
          <Hero/>
          <Routes>
          <Route path="/favorite" component={Favorite}/>
        </Routes>

      </Router>
    </div>
  )
}

export default App
