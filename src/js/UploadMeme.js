import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMeme } from './Store';
import './../css/meme.css';


function UploadMeme() {
  const [url, setUrl] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (url.trim() === '') {
      alert('Wprowadź URL zdjęcia!');
      return;
    }
    dispatch(addMeme({ url }));
    setUrl('');
    alert('Nowy mem został dodany!');
  };

  return (
    <div className="meme-upload">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Wprowadź URL zdjęcia"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="input-upload"
        />
        <button
          type="submit"
          className="submit-upload"
        >
          Dodaj
        </button>
      </form>
    </div>
  );
}

export default UploadMeme;