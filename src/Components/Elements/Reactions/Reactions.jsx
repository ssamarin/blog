import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { reactionAdded, reactionRemoved } from './reactionsSlice';

import like from '../../../assets/icons/like.svg';
import likeActive from '../../../assets/icons/likeActive.svg';
import dislike from '../../../assets/icons/dislike.svg';
import dislikeActive from '../../../assets/icons/dislikeActive.svg';

const ReactionsWrapper = styled.div`
    display: flex;
    column-gap: 24px;

    .reaction__count {
      display: flex;
      align-items: center;
      column-gap: 8px;

      p {
        color: #4f4f4f;
        font-size: 16px;
        line-height: 112%;
      }

      button {
        width: 32px;
        height: 32px;
        background-color: transparent;
      }

      img {
        width: 32px;
        height: 32px;
      }
    }
  }
`;

function Reactions({
  id,
}) {
  const dispatch = useDispatch();
  const [countOfLike, setCountOfLike] = useState(Math.round(Math.random() * 50));
  const [countOfDislike, setCountOfDislike] = useState(Math.round(Math.random() * 50));
  const [isLikeActive, setIsLikeActive] = useState(false);
  const [isDislikeActive, setIsDislikeActive] = useState(false);

  const toggleLike = () => {
    const newLikeStatus = !isLikeActive;
    setIsLikeActive(newLikeStatus);
    setIsDislikeActive(false);
    const newCountOfLike = newLikeStatus ? countOfLike + 1 : countOfLike - 1;
    setCountOfLike(newCountOfLike);
    if (id) {
      dispatch(reactionRemoved(id));
    }
    if (newLikeStatus || isDislikeActive) {
      dispatch(
        reactionAdded({
          id,
          likeStatus: newLikeStatus,
          disLikeStatus: isDislikeActive,
          countOfLike: newCountOfLike,
          countOfDislike,
        }),
      );
    }
  };

  const toggleDislike = () => {
    const newDislikeStatus = !isDislikeActive;
    setIsDislikeActive(newDislikeStatus);
    setIsLikeActive(false);
    const newCountOfDislike = newDislikeStatus ? countOfDislike + 1 : countOfDislike - 1;
    setCountOfDislike(newCountOfDislike);
    if (id) {
      dispatch(reactionRemoved(id));
    }
    if (newDislikeStatus || isLikeActive) {
      dispatch(
        reactionAdded({
          id,
          likeStatus: isLikeActive,
          disLikeStatus: newDislikeStatus,
          countOfLike,
          countOfDislike: newCountOfDislike,
        }),
      );
    }
  };

  return (
    <ReactionsWrapper>
      <div className="reaction__count">
        <button
          type="button"
          aria-label="add like"
          onClick={() => toggleLike()}
        >
          <img src={isLikeActive ? likeActive : like} alt="like" />
        </button>
        <p>{countOfLike}</p>
      </div>
      <div className="reaction__count">
        <button
          type="button"
          aria-label="add dislike"
          onClick={() => toggleDislike()}
        >
          <img src={isDislikeActive ? dislikeActive : dislike} alt="dislike" />
        </button>
        <div>{countOfDislike}</div>
      </div>
    </ReactionsWrapper>
  );
}

Reactions.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Reactions;
