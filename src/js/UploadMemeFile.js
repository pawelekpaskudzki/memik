import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMeme } from './Store';

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
    <div style={{ margin: '20px', textAlign: 'center' }}>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          accept="image/*" 
          onChange={(e) => setFile(e.target.files[0])}
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

export default UploadMemeFile;