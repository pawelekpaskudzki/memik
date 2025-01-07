import React from 'react';
import { useSelector } from 'react-redux';
import Meme from './Meme';
import './../css/default.css';


function MemePage({ pageType }) {

  const allMemes = useSelector((state) => state.memes);

  const hotMemes = useSelector((state) =>
    state.memes.filter((p) => p.upvotes - p.downvotes >= 5)
  );

  let memes = pageType === 'hot' ? hotMemes : allMemes;
  let pageTile = pageType === 'hot' ? 'Najlepsze memy' : 'Wszystkie memy';

  return (
    <div className='default-container'>
      <h1>{pageTile}</h1>
      {memes.length > 0 ? (
        memes.map((meme) => <Meme key={meme.id} meme={meme} />)
      ) : (
        <p>Samo dziadowstwo</p>
      )}
    </div>
  );
}

export default MemePage;