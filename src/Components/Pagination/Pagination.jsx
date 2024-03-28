import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { setCountOfPage, setOffset, setLimit } from '../PostList/postListSlice';

import right from '../../assets/icons/right.svg';
import left from '../../assets/icons/left.svg';

const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
  font-size: 25px;
  column-gap: 25px;
  
  button {
    width: 100px;
    height: 50px;
    background-color: transparent;

    img {
      width: 20px;
      height: 20px;
    }
  }
`;

function Pagination() {
  const dispatch = useDispatch();
  const countOfPage = useSelector((state) => state.postsList.countOfPage);
  const postsLoadingStatus = useSelector((state) => state.postsList.postsLoadingStatus);
  const posts = useSelector((state) => state.postsList.posts);

  const changePage = (num, offset) => {
    dispatch(setCountOfPage(num));
    dispatch(setOffset(offset));
    dispatch(setLimit(offset));
  };

  if (postsLoadingStatus === 'loading') {
    return null;
  }

  return (
    <PaginationWrapper>
      <button
        onClick={() => changePage(-1, -5)}
        type="button"
        aria-label="back"
        disabled={countOfPage === 1 || posts.length < 2}
      >
        <img src={left} alt="back" />
      </button>
      <span>Страница</span>
      {' '}
      <div>{countOfPage}</div>
      {' '}
      <span>из</span>
      {' '}
      <span>{posts.length < 2 ? 1 : 20}</span>
      <button
        onClick={() => changePage(1, 5)}
        type="button"
        aria-label="more"
        disabled={countOfPage === 20 || posts.length < 2}
      >
        <img src={right} alt="more" />
      </button>
    </PaginationWrapper>
  );
}

export default Pagination;
