import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMeme } from './Store';
import './../css/meme.css';


function UploadMemeFile() {
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!file) {
      alert('Proszę wybrać plik!');
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const fileUrl = reader.result; // URL obiektu (blob z danzmi obrazka)
      dispatch(addMeme({ url: fileUrl }));
      setFile(null);
      alert('Nowy mem został dodany!');
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="meme-upload">
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
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

export default UploadMemeFile;