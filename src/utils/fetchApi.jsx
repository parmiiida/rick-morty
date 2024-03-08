import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import CharacterCard from '../components/characterCard';




const BASE_URL = 'https://rickandmortyapi.com/api'



// character fetching
// ----------------------------------------------------------------------------------------------------------------
const fetchCharacter = async (id) => {
  try {
    const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching character with ID ${id}:`, error);
  }
};


function CharacterApi({ url, ids }) {
  const id = url.split('/').pop();

  // If ids prop is provided and id is not in ids, return null
  if (ids && !ids.includes(parseInt(id))) return null;

  const { isLoading, error, data } = useQuery({
    queryKey: ['character', id],
    queryFn: () => fetchCharacter(id),
  });

  if (isLoading) return 'Loading...';
  if (error) return 'An error has occurred: ' + error.message;

  return <CharacterCard data={data} />;
}

// ----------------------------------------------------------------------------------------------------------------
//fetching episodes
const fetchEpisodes = async (query = '') => {
  const response = await axios.get(`${BASE_URL}/episode`);
  const episodes = response.data.results;

  const filteredEpisodes = episodes.filter((episode) =>
    episode.name.toLowerCase().includes(query.toLowerCase())
  );

  return [...filteredEpisodes];
};



function FetchApi() {
  const {data: episodes , isLoading } = useQuery({
    queryFn: () => fetchEpisodes(),
    queryKey: ['episodes'],
  })

  if(isLoading) {
    return <div>Loading...</div>

  }

  return (
<div className='items-center w-[100%]  justify-center flex flex-col '>
  {episodes.slice(0, 1).map((episode) => (
    <ul key={episode.id} className='flex flex-wrap '>
      {episode.characters.slice(0, 4).map((url) => (
        <CharacterApi key={url} url={url} ids={[1, 2 ,38 ,35]} />
      ))}
    </ul>
  ))}
</div>
  )

}

export default FetchApi;
