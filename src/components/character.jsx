import React from 'react'




function Character({ data}) {
  return (
    <div>
      <li>
        <h2 className='text-white'>{data.name}</h2>
        {/* <p>gender: {data.gender}</p>
        <p>Status: {data.status}</p>
        <p>Species: {data.species}</p>
        <p>Location: {data.location ? data.location.name : 'N/A'}</p>
        <p>type: {data.type}</p>
        <p>id: {data.id}</p>
        <p>URL: <a href={data.url}>{data.url}</a></p>
        <p>Species: {data.species}</p>
        <p>origin: {data.origin ? data.origin.name : 'N/A'}</p>
        <img src={data.image} alt={data.name} /> */}
      </li>
    </div>
  );
}


export default Character


