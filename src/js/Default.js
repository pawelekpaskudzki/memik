import React from 'react';
import { useSelector } from 'react-redux';
import Meme from './Meme';
import './../css/default.css';


function Default() {
  const memes = useSelector((state) => state.memes);

  // Wybór losowego mema
  const randomMeme = memes[Math.floor(Math.random() * memes.length)];

  return (
    <div className='default-container'>
      <h1>Mem na dzis</h1>
      {randomMeme ? (
      <Meme key={randomMeme.id} meme={randomMeme} />
      ) : (
        <p>Brak dostępnych memów</p>
      )}
    </div>
  );
}

export default Default;