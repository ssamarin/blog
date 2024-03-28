import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import RemoveBtn from '../Elements/RemoveBtn';
import Reactions from '../Elements/Reactions';
import Button from '../Elements/Button';

import cat from '../../assets/img/cat.jpg';

const PostWrapper = styled.div`
  grid-column: 1 / -1;
  width: 100%;
  height: 770px;

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

    .learnMore {
      float: right;
    }
  }
`;

function FullWidthPost({ title, body, id }) {
  return (
    <PostWrapper className="post">
      <RemoveBtn id={id} />
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
