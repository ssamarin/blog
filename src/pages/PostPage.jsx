import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import Reactions from '../Components/Elements/Reactions';

import back from '../assets/icons/back.svg';
import cat from '../assets/img/cat.jpg';

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
  } = location.state;

  return (
    <SinglePostWrapper>
      <header>
        <NavLink to="/" className="link">
          <img src={back} alt="back to main page" />
          <div>Вернуться к статьям</div>
        </NavLink>
        <Reactions {...{ id }} />
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
