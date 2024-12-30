import React from 'react';
import { useSelector } from 'react-redux';
import Meme from './Meme';
import './../css/default.css';
import UploadMeme from './UploadMeme';


function AllMemes() {
  const memes = useSelector((state) => state.memes);

  return (
    <div className='default-container'>
      <h1>Wszystkie memy</h1>
      <UploadMeme />
      {memes.map((meme) => (
        <Meme key={meme.id} meme={meme} />
      ))}
    </div>
  );
}

export default AllMemes;
