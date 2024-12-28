import React from 'react';
import { useDispatch } from 'react-redux';
import { upvote, downvote } from './Store';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

function Meme({ meme }) {
  const dispatch = useDispatch();

  return (
    <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px', textAlign: 'center' }}>
      <img src={meme.url} alt={`Meme ${meme.id}`} style={{ maxWidth: '100%', height: 'auto' }} />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px' }}>
        {/* Ikonka kciuka w górę z licznikiem */}
        <div style={{ margin: '0 10px', textAlign: 'center' }}>
          <FaThumbsUp 
            onClick={() => dispatch(upvote(meme.id))}
            style={{ cursor: 'pointer', fontSize: '24px', color: '#28a745' }} 
          />
          <p>{meme.upvotes}</p>
        </div>

        {/* Ikonka kciuka w dół z licznikiem */}
        <div style={{ margin: '0 10px', textAlign: 'center' }}>
          <FaThumbsDown 
            onClick={() => dispatch(downvote(meme.id))}
            style={{ cursor: 'pointer', fontSize: '24px', color: '#dc3545' }} 
          />
          <p>{meme.downvotes}</p>
        </div>
      </div>
    </div>
  );
}

export default Meme;