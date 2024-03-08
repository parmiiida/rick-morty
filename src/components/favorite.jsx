import React from 'react';
import CharacterCard from './characterCard';

function Favorite({ favorites }) {
  return (
    <div>
      {favorites.map((character) => (
        <CharacterCard key={character.id} data={data} />
      ))}
    </div>
  );
}

export default Favorite;