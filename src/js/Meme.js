import React from 'react';
import { useDispatch } from 'react-redux';
import { upvote, downvote } from './Store';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import './../css/meme.css';

function Meme({ meme }) {
  const dispatch = useDispatch();

  if (!meme || !meme.url || !meme.id) {
    return <div>Invalid meme data</div>;
  }

  return (
    <div className="meme-container">
      <img
        src={meme.url}
        alt={`Meme ${meme.id}`}
        className="meme-image"
        loading="lazy"
      />
      <div className="vote-container">
        <div className="vote-item">
          <FaThumbsUp
            onClick={() => dispatch(upvote(meme.id))}
            className="icon upvote"
          />
          <p>{meme.upvotes}</p>
        </div>
        <div className="vote-item">
          <FaThumbsDown
            onClick={() => dispatch(downvote(meme.id))}
            className="icon downvote"
          />
          <p>{meme.downvotes}</p>
        </div>
      </div>
    </div>
  );
}

export default Meme;