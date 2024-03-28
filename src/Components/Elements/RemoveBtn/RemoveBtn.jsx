import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { productDeleted } from '../../PostList/postListSlice';

import remove from '../../../assets/icons/remove.svg';

const RemoveWrapper = styled.button`
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
`;

function RemoveBtn({ id }) {
  const dispatch = useDispatch();
  const onPostDeleted = ((key) => {
    dispatch(productDeleted(key));
  });

  return (
    <RemoveWrapper
      onClick={() => onPostDeleted(id)}
      aria-label="remove product"
      type="button"
      className="remove"
    >
      <img src={remove} alt="remove product" />
    </RemoveWrapper>
  );
}

export default RemoveBtn;
