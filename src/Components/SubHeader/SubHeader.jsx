import React from 'react';
import styled from 'styled-components';

import search from '../../assets/icons/search.svg';

const SubHeaderWrapper = styled.section`
  p {
    margin-bottom: 32px;
    color: #0a0a0a;
    font-size: 24px;
    line-height: 133%;
    letter-spacing: 0.02em;
  }

  input {
    width: 1140px;
    height: 48px;
    margin-bottom: 32px;
    padding: 12px 0 12px 46px;
    color: #333;
    font-size: 16px;
    line-height: 150%;
    background: url(${search}) no-repeat 14px 14px;
    border: 1px solid rgb(145 158 171 / 32%);
    border-radius: 6px;
    transition:
      border-color 0.3s,
      background-color 0.3s;

    &:active,
    &:focus {
      background-color: #e8f0fe;
      border-color: #4285f4;
    }
  }
`;

function SubHeader() {
  return (
    <SubHeaderWrapper>
      <p>
        Здесь мы делимся интересными кейсами из наших проектов,
        пишем про IT, а также переводим зарубежные статьи
      </p>
      <input type="text" placeholder="Поиск по названию статьи" />
    </SubHeaderWrapper>
  );
}

export default SubHeader;
