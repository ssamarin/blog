import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchData: '',
  dbSearchData: '',
};

const subHeader = createSlice({
  name: 'subHeader',
  initialState,
  reducers: {
    updateSearchData: (state, action) => { state.searchData = action.payload; },
    updateDbSearchData: (state, action) => { state.dbSearchData = action.payload; },
  },
});

const { actions, reducer } = subHeader;

export default reducer;
export const {
  updateSearchData,
  updateDbSearchData,
} = actions;
