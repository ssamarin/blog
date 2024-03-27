import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  postsWithReactions: [],
};

const reactions = createSlice({
  name: 'reactions',
  initialState,
  reducers: {
    reactionAdded: (state, action) => {
      const {
        id, likeStatus, disLikeStatus, countOfLike, countOfDislike,
      } = action.payload;
      state.postsWithReactions.push({
        id, likeStatus, disLikeStatus, countOfLike, countOfDislike,
      });
    },
    reactionRemoved: (state, action) => {
      state.postsWithReactions = state.postsWithReactions
        .filter((reaction) => reaction.id !== action.payload);
    },
  },
});

const { actions, reducer } = reactions;

export default reducer;
export const {
  reactionAdded,
  reactionRemoved,
} = actions;
