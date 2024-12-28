import React from 'react';
import { useSelector } from 'react-redux';
import Meme from './Meme';
import './../css/default.css';


function BestMemes() {
  const memes = useSelector((state) =>
    state.memes.filter((p) => p.upvotes - p.downvotes >= 5)
  );

  return (
    <div className='default-container'>
      <h1>Najlepsze memy</h1>
      {memes.length > 0 ? (
        memes.map((meme) => <Meme key={meme.id} meme={meme} />)
      ) : (
        <p>Brak najlepszych memów</p>
      )}
    </div>
  );
}

export default BestMemes;