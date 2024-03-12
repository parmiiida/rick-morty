import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Favorite from './components/favorite';
import EpisodeCharacters from './utils/EpisodeCharacters'; // Import the new component
import { useSelector } from 'react-redux'; // Import useSelector
import { selectFavorites } from './features/favoritesSlice';

const App = () => {

  const favorites = useSelector(selectFavorites);
  return (
    <div className='flex justify-center flex-col flex-auto items-center '>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/favorite" element={<Favorite favorites={favorites} />} />
          <Route path="/episode/:id" element={<EpisodeCharacters/>} />
          {/* <Route path="/episode/:id" element={<EpisodeCharacters />} /> New route */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
