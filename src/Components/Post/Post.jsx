import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import RemoveBtn from '../Elements/RemoveBtn';
import Button from '../Elements/Button';
import Reactions from '../Elements/Reactions';

import cat from '../../assets/img/cat.jpg';

const PostWrapper = styled.div`
  width: 558px;
  height: 430px;

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
  return (
    <PostWrapper className="post">
      <RemoveBtn {...{ id }} />
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
