import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const ButtonWrapper = styled.div`
  .learnMore {
    width: 150px;
    height: 45px;
    color: #0a0a0a;
    font-size: 15px;
    background-color: #fff;
    border: 2px solid #0a0a0a;
    border-radius: 60px;
    transition: all 0.3s ease;

    &:hover {
      color: #fff;
      background-color: #0a0a0a;
    }

    &:active {
      box-shadow: 0 0 5px rgb(0 0 0 / 30%);
      transform: translateY(2px);
    }
  }
`;

function Button({ body, id, title }) {
  return (
    <ButtonWrapper>
      <NavLink
        to={`/post/:${id}`}
        state={{
          body,
          title,
        }}
      >
        <button
          type="button"
          aria-label="learn more"
          className="learnMore"
        >
          Читать далее
        </button>
      </NavLink>
    </ButtonWrapper>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default Button;
