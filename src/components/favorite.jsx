import React from 'react';
import CharacterCard from './characterCard';
import { useDispatch } from 'react-redux';
import { removeFavorite } from '../features/favoritesSlice';
import { useSelector } from 'react-redux';

function Favorite({ favorites = []}) {
  const dispatch = useDispatch();
  const searchTerm = useSelector(state => state.search);
  const handleDelete = (id) => {
    dispatch(removeFavorite(id));
  };

  if (favorites.length === 0) {
    return <p>" Your favorite list is empty! "</p>;
  }

  return (
    <div className='flex flex-row flex-wrap'>
      {favorites.filter(favorite => favorite.name.toLowerCase().includes(searchTerm.toLowerCase())).map((data, index) => (
        <CharacterCard key={index} data={data} onDelete={() => handleDelete(data.id)} showButtons={false} showDeleteButton={true}/>
      ))}
    </div>
  );
}
export default Favorite;