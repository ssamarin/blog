import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchData: '',
};

const subHeader = createSlice({
  name: 'subHeader',
  initialState,
  reducers: {
    updateSearchData: (state, action) => { state.searchData = action.payload; },
  },
});

const { actions, reducer } = subHeader;

export default reducer;
export const {
  updateSearchData,
} = actions;
