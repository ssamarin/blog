import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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

function Reactions({ id }) {
  const dispatch = useDispatch();
  const postsWithReactions = useSelector((state) => state.reactions.postsWithReactions);

  const [reactions, setReactions] = useState({
    countOfLike: Math.round(Math.random() * 50),
    countOfDislike: Math.round(Math.random() * 50),
    isLikeActive: false,
    isDislikeActive: false,
  });

  const {
    countOfLike,
    countOfDislike,
    isLikeActive,
    isDislikeActive,
  } = reactions;

  useEffect(() => {
    const reaction = postsWithReactions.find((react) => react.id === id);
    if (reaction) {
      setReactions({
        ...reactions,
        countOfLike: reaction.countOfLike,
        countOfDislike: reaction.countOfDislike,
        isLikeActive: reaction.likeStatus,
        isDislikeActive: reaction.disLikeStatus,
      });
    }
  }, [id, postsWithReactions]);

  const toggleLike = () => {
    const newLikeStatus = !isLikeActive;
    const newDislikeStatus = false;
    let newCountOfLike = countOfLike;
    let newCountOfDislike = countOfDislike;

    if (!isLikeActive && newLikeStatus) {
      newCountOfLike += 1;
      if (isDislikeActive) {
        newCountOfDislike -= 1;
      }
    } else if (isLikeActive && !newLikeStatus) {
      newCountOfLike -= 1;
    }

    setReactions({
      ...reactions,
      countOfLike: newCountOfLike,
      countOfDislike: newCountOfDislike,
      isLikeActive: newLikeStatus,
      isDislikeActive: newDislikeStatus,
    });

    dispatch(reactionRemoved(id));
    dispatch(
      reactionAdded({
        id,
        likeStatus: newLikeStatus,
        disLikeStatus: newDislikeStatus,
        countOfLike: newCountOfLike,
        countOfDislike: newCountOfDislike,
      }),
    );
  };

  const toggleDislike = () => {
    const newDislikeStatus = !isDislikeActive;
    const newLikeStatus = false;
    let newCountOfDislike = countOfDislike;
    let newCountOfLike = countOfLike;

    if (!isDislikeActive && newDislikeStatus) {
      newCountOfDislike += 1;
      if (isLikeActive) {
        newCountOfLike -= 1;
      }
    } else if (isDislikeActive && !newDislikeStatus) {
      newCountOfDislike -= 1;
    }

    setReactions({
      ...reactions,
      countOfLike: newCountOfLike,
      countOfDislike: newCountOfDislike,
      isLikeActive: newLikeStatus,
      isDislikeActive: newDislikeStatus,
    });

    dispatch(reactionRemoved(id));
    dispatch(
      reactionAdded({
        id,
        likeStatus: newLikeStatus,
        disLikeStatus: newDislikeStatus,
        countOfLike: newCountOfLike,
        countOfDislike: newCountOfDislike,
      }),
    );
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
