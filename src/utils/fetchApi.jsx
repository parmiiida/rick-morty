import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import CharacterCard from '../components/characterCard';
import Episode from '../components/episode';
import { Link } from 'react-router-dom';



const BASE_URL = 'https://rickandmortyapi.com/api'


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
    <div className='items-center w-[100%] justify-center flex-col md:flex-row flex flex-wrap gap-6 bg-[#424547]'>
      {episodes.map((episode) => (
        <div key={episode.id} className='w-[80%] md:w-1/4 sm:w-1/3 '>
          <Episode episode={episode} />
        </div>
      ))}
    </div>
  )

}

export default FetchApi;
