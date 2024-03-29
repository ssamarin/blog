import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { updateSearchData, updateDbSearchData } from './subHeaderSlice';

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
    transition: opacity 0.3s ease;

    &:active,
    &:focus {
      outline: none;
      background-color: #f2f2f2;
      border-color: #999;
    }

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
      border: 2px dashed #999;
      background-color: #f0f0f0;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
  }


  @media (max-width: 1240px) {
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
  const searchData = useSelector((state) => state.subHeader.searchData);
  const dbSearchData = useSelector((state) => state.subHeader.dbSearchData);

  const onSearchDataChange = (value) => {
    dispatch(updateSearchData(value));
  };

  const onDbSearchDataChange = (value) => {
    dispatch(updateDbSearchData(value));
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      dispatch(updateDbSearchData(e.target.value));
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
        type="text"
        disabled={dbSearchData.length > 0}
        placeholder="Поиск по странице"
      />
      <input
        onBlur={(e) => onDbSearchDataChange(e.target.value)}
        type="text"
        onKeyDown={handleKeyDown}
        disabled={searchData.length > 0}
        placeholder="Серверный поиск"
      />
    </SubHeaderWrapper>
  );
}

export default SubHeader;
