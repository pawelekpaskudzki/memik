import React from 'react';
import './../css/default.css';
import UploadMeme from './UploadMeme';
import UploadMemeFile from './UploadMemeFile';


function AddMeme() {

  return (
    <div className='default-container'>
      <h1>Dodaj mema</h1>
      <UploadMeme />
      <UploadMemeFile />
    </div>
  );
}

export default AddMeme;
