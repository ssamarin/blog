import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Button from '../Elements/Button';
import Reactions from '../Elements/Reactions';
import { productDeleted } from '../PostList/postListSlice';

import cat from '../../assets/img/cat.jpg';
import remove from '../../assets/icons/remove.svg';

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
    }
  }
`;

function Post({ title, id, body }) {
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
      <div className="descr">
        <h2>{`${title.slice(0, 15)}...`}</h2>
        <div className="btns">
          <Reactions {...{ id }} />
          <Button {...{ id, body, title }} />
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
