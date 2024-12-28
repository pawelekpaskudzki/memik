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
    },
    downvote: (state, action) => {
      const meme = state.find((p) => p.id === action.payload);
      if (meme) meme.downvotes += 1;
    },
  },
});

export const { upvote, downvote } = memesSlice.actions;

const store = configureStore({
  reducer: {
    memes: memesSlice.reducer,
  },
});

export default store;