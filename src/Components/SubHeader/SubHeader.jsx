import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { updateSearchData } from './subHeaderSlice';

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
      outline: none;
      background-color: #f2f2f2;
      border-color: #999;
    }
  }


  @media (width <= 1240px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    input,
    p {
      width: 90%;
    }
  }
`;

function SubHeader() {
  const dispatch = useDispatch();

  const onSearchDataChange = (value) => {
    dispatch(updateSearchData(value));
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      dispatch(updateSearchData(e.target.value));
    }
  };

  return (
    <SubHeaderWrapper>
      <p>
        Здесь мы делимся интересными кейсами из наших проектов,
        пишем про IT, а также переводим зарубежные статьи
      </p>
      <input
        onChange={(e) => onSearchDataChange(e.target.value)}
        onKeyDown={handleKeyDown}
        type="text"
        placeholder="Поиск по названию статьи"
      />
    </SubHeaderWrapper>
  );
}

export default SubHeader;
