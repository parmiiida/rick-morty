import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import CharacterCard from '../components/characterCard';
import { useParams } from 'react-router-dom';


const BASE_URL = 'https://rickandmortyapi.com/api';

const EpisodeCharacters = ({url ,ids }) => {
   const {id }= useParams();

   const fetchCharactersByEpisode = async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}/episode/${id}`);
      const characterUrls = response.data.characters;
      const characters = await Promise.all(
        characterUrls.map(url => axios.get(url).then(res => res.data))
      );
      return characters;
    } catch (error) {
      console.error(`Error fetching characters for episode ${id}:`, error);
    }
  };
  // If ids prop is provided and id is not in ids, return null
  if (ids && !ids.includes(parseInt(id))) return null;

  const { isLoading, error, data } = useQuery({
    queryKey: ['character', id],
    queryFn: () => fetchCharactersByEpisode(id),
  });

  if (isLoading) return 'Loading...';
  if (error) return 'An error has occurred: ' + error.message;

  return (
    <div className='items-center w-[100%] justify-center flex flex-col'>
      {data.map((character) => (
       <CharacterCard key={character.id} data={character} />
      ))}
    </div>
  );
}

export default EpisodeCharacters;


