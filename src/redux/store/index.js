import { configureStore } from '@reduxjs/toolkit';

import postsList from '../../Components/PostList/postListSlice';
import subHeader from '../../Components/SubHeader/subHeaderSlice';

const store = configureStore({
  reducer: { postsList, subHeader },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
