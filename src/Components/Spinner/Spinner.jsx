import React from 'react';
import styled, { keyframes } from 'styled-components';

const spinAnimation = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const SpinnerWrapper = styled.div`
  width: 100px;
  height: 100px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  &::after {
    content: "";
    width: 90px;
    height: 90px;
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    border-top-color: #ccc;
    border-bottom-color: #888;
    animation: ${spinAnimation} 1s ease-in-out infinite;
}
`;

function Spinner() {
  return <SpinnerWrapper />;
}

export default Spinner;
