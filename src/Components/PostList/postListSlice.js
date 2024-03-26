import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [],
  postsLoadingStatus: 'idle',
  offset: 0,
  limit: 5,
  countOfPage: 1,
};

const postsList = createSlice({
  name: 'postsList',
  initialState,
  reducers: {
    postsFetching: (state) => { state.postsLoadingStatus = 'loading'; },
    postsFetched: (state, action) => {
      state.posts = [...action.payload];
      state.postsLoadingStatus = 'idle';
    },
    postsFetchingError: (state) => { state.postsLoadingStatus = 'error'; },
    setOffset: (state, action) => { state.offset += action.payload; },
    setCountOfPage: (state, action) => { state.countOfPage += action.payload; },
    setLimit: (state, action) => { state.limit += action.payload; },
    productDeleted: (state, action) => {
      state.posts = state.posts.filter((product) => product.id !== action.payload);
    },
  },
});

const { actions, reducer } = postsList;

export default reducer;
export const {
  postsFetching,
  postsFetched,
  postsFetchingError,
  setOffset,
  setCountOfPage,
  setLimit,
  productDeleted,
} = actions;
