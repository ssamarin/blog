import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Reactions from '../Elements/Reactions';
import Button from '../Elements/Button';

import { productDeleted } from '../PostList/postListSlice';

import cat from '../../assets/img/cat.jpg';
import remove from '../../assets/icons/remove.svg';

const PostWrapper = styled.div`
  grid-column: 1 / -1;
  position: relative;
  width: 100%;
  height: 770px;
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
    width: 100%;
    height: 550px;
    margin-bottom: 24px;
  }

  .text {
    padding: 0 16px;

    .postHeader {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 32px;

      h2 {
        color: #0a0a0a;
        font-weight: 700;
        font-size: 28px;
        line-height: 114%;
      }
    }

    .descr {
      margin-bottom: 32px;
      color: #0a0a0a;
      font-weight: 400;
      font-size: 24px;
      line-height: 133%;
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

    .learnMore {
      float: right;
    }
  }
`;

function FullWidthPost({ title, body, id }) {
  const dispatch = useDispatch();

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
      <div className="text">
        <div className="postHeader">
          <h2>{`${title.slice(0, 30)}...`}</h2>
          <Reactions {...{ id }} />
        </div>
        <div className="descr">
          {`${body.slice(0, 80)}...`}
        </div>
        <Button {...{ id, body, title }} />
      </div>
    </PostWrapper>
  );
}

FullWidthPost.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default FullWidthPost;
