import { configureStore } from '@reduxjs/toolkit';

import postsList from '../../Components/PostList/postListSlice';
import subHeader from '../../Components/SubHeader/subHeaderSlice';
import reactions from '../../Components/Elements/Reactions/reactionsSlice';

const store = configureStore({
  reducer: { postsList, subHeader, reactions },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
