import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { reactionRemoved, reactionAdded } from '../Components/Elements/Reactions/reactionsSlice';

import back from '../assets/icons/back.svg';
import cat from '../assets/img/cat.jpg';
import like from '../assets/icons/like.svg';
import likeActive from '../assets/icons/likeActive.svg';
import dislike from '../assets/icons/dislike.svg';
import dislikeActive from '../assets/icons/dislikeActive.svg';

const SinglePostWrapper = styled.section`
  padding: 80px 0 64px;

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 48px;

      img {
        width: 20px;
        height: 20px;
        margin-right: 6px;
      }

      .link {
        display: flex;
        align-items: center;
      }

      .reactions {
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
    }

    h1 {
      margin-bottom: 48px;
      color: #0a0a0a;
      font-weight: 700;
      font-size: 40px;
      line-height: 120%;
      text-align: center;
    }

    .picture {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 48px;

      img {
        width: 848px;
        height: 477px;
      }
    }

    p {
      color: #0a0a0a;
      font-weight: 400;
      font-size: 18px;
      line-height: 144%;
    }
`;

function SinglePost() {
  const location = useLocation();
  const {
    body,
    title,
    id,
    likes,
    dislikes,
    likeStatus,
    dislikeStatus,
  } = location.state;

  const dispatch = useDispatch();
  const [countOfLike, setCountOfLike] = useState(likes);
  const [countOfDislike, setCountOfDislike] = useState(dislikes);
  const [isLikeActive, setIsLikeActive] = useState(likeStatus);
  const [isDislikeActive, setIsDislikeActive] = useState(dislikeStatus);

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
    <SinglePostWrapper>
      <header>
        <NavLink to="/" className="link">
          <img src={back} alt="back to main page" />
          <div>Вернуться к статьям</div>
        </NavLink>
        <div className="reactions">
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
        </div>
      </header>
      <h1>{title}</h1>
      <div className="picture">
        <img src={cat} alt="cat" />
      </div>
      <p>{body}</p>
    </SinglePostWrapper>
  );
}

export default SinglePost;
