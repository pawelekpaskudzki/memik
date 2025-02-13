import { configureStore, createSlice } from '@reduxjs/toolkit';

const memesSlice = createSlice({
  name: 'memes',
  initialState: [
    { id: 1, url: '/img/meme1.jpg', upvotes: 0, downvotes: 0 },
    { id: 2, url: '/img/meme2.jpg', upvotes: 0, downvotes: 0 },
    { id: 3, url: '/img/meme3.jpg', upvotes: 0, downvotes: 0 }

  ],
  reducers: {
    upvote: (state, action) => {
      const meme = state.find((p) => p.id === action.payload);
      if (meme) meme.upvotes += 1;
      playSoundThumbUp();
    },
    downvote: (state, action) => {
      const meme = state.find((p) => p.id === action.payload);
      if (meme) meme.downvotes += 1;
      playSoundThumbDown();

   
    },
    addMeme: (state, action) => {
      const newMeme = {
        id: state.length + 1,
        url: action.payload.url,
        upvotes: 0,
        downvotes: 0,
      };
      state.push(newMeme);
    }
  }
});

const playSoundThumbUp = () => {
  const audio = new Audio('/img/hahaha.mp3');
  audio.play();
};

const playSoundThumbDown = () => {
  const audio = new Audio('/img/boo.mp3');
  audio.play();
};

export const { upvote, downvote, addMeme  } = memesSlice.actions;

const store = configureStore({
  reducer: {
    memes: memesSlice.reducer,
  }
});

export default store;