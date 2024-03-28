import React from 'react';
import { useDispatch } from 'react-redux';
import { productDeleted } from '../../PostList/postListSlice';

import remove from '../../../assets/icons/remove.svg';

function RemoveBtn({ id }) {
  const dispatch = useDispatch();
  const onPostDeleted = ((key) => {
    dispatch(productDeleted(key));
  });

  return (
    <button
      onClick={() => onPostDeleted(id)}
      aria-label="remove product"
      type="button"
      className="remove"
    >
      <img src={remove} alt="remove product" />
    </button>
  );
}

export default RemoveBtn;
