import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMeme } from './Store';

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
    <div style={{ margin: '20px', textAlign: 'center' }}>
      <h2>Dodaj nowy mem</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Wprowadź URL zdjęcia"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          style={{ padding: '10px', width: '300px' }}
        />
        <button
          type="submit"
          style={{ marginLeft: '10px', padding: '10px 20px' }}
        >
          Dodaj
        </button>
      </form>
    </div>
  );
}

export default UploadMeme;