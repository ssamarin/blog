import { configureStore } from '@reduxjs/toolkit';

import postsList from '../../Components/PostList/postListSlice';

const store = configureStore({
  reducer: { postsList },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
