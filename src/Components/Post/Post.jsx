import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { productDeleted } from '../PostList/postListSlice';

import cat from '../../assets/img/cat.jpg';
import remove from '../../assets/icons/remove.svg';
import likeActive from '../../assets/icons/likeActive.svg';
import dislike from '../../assets/icons/dislike.svg';

const PostWrapper = styled.div`
  width: 558px;
  height: 430px;
  position: relative;
  border: 1px solid #f4f4f4;
  border-radius: 12px;
  box-shadow:
    0 0 1px 0 rgb(0 0 0 / 4%),
    0 2px 6px 0 rgb(0 0 0 / 4%),
    0 10px 20px 0 rgb(0 0 0 / 4%);
  transition:
    box-shadow 0.3s ease,
    border 0.3s ease;

  &:hover {
    border: 1px solid #ccc;
    box-shadow:
      0 0 5px 0 rgb(0 0 0 / 10%),
      0 8px 16px 0 rgb(0 0 0 / 10%),
      0 16px 32px 0 rgb(0 0 0 / 10%);
  }

  .remove {
    position: absolute;
    top: 0;
    right: 0;
    width: 30px;
    height: 30px;
    background-color: transparent;

    img {
      width: 30px;
      height: 30px;
    }
  }

  img {
    width: 558px;
    height: 273px;
    margin-bottom: 24px;
  }

  .descr {
    padding: 0 16px;

    h2 {
      margin-bottom: 24px;
      color: #0a0a0a;
      font-weight: 700;
      font-size: 28px;
      line-height: 114%;
    }

    .btns {
      display: flex;
      justify-content: space-between;

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

      .learnMore {
        width: 150px;
        height: 45px;
        color: #0a0a0a;
        font-size: 15px;
        background-color: #fff;
        border: 2px solid #0a0a0a;
        border-radius: 60px;
        transition: all 0.3s ease;

        &:hover {
          color: #fff;
          background-color: #0a0a0a;
        }

        &:active {
          box-shadow: 0 0 5px rgb(0 0 0 / 30%);
          transform: translateY(2px);
        }
      }
    }
  }
`;

function Post({ title, id, body }) {
  const dispatch = useDispatch();
  const [countOfLike] = useState(Math.round(Math.random() * 50));
  const [countOfDisslike] = useState(Math.round(Math.random() * 50));

  const onPostDeleted = (key) => {
    dispatch(productDeleted(key));
  };

  return (
    <PostWrapper>
      <button
        onClick={() => onPostDeleted(id)}
        aria-label="remove product"
        type="button"
        className="remove"
      >
        <img src={remove} alt="remove product" />
      </button>
      <img src={cat} alt="cat" />
      <div className="descr">
        <h2>{`${title.slice(0, 15)}...`}</h2>
        <div className="btns">
          <div className="reactions">
            <div className="reaction__count">
              <button
                type="button"
                aria-label="add like"
              >
                <img src={likeActive} alt="like" />
              </button>
              <p>{countOfLike}</p>
            </div>
            <div className="reaction__count">
              <button
                type="button"
                aria-label="add dislike"
              >
                <img src={dislike} alt="dislike" />
              </button>
              <div>{countOfDisslike}</div>
            </div>
          </div>
          <NavLink
            to={`/post/:${id}`}
            state={{
              body, title, countOfLike, countOfDisslike,
            }}
          >
            <button
              type="button"
              aria-label="learn more"
              className="learnMore"
            >
              Читать далее
            </button>
          </NavLink>
        </div>
      </div>
    </PostWrapper>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default Post;
