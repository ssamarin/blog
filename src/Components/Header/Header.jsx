import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  padding-top: 64px;
  margin-bottom: 24px;

  h1 {
    cursor: pointer;
    font-weight: 700;
    font-size: 60px;
    position: relative;
    line-height: 113%;
    text-align: center;
    transition: transform 0.6s ease;
    color: #0a0a0a;

    &::before {
      content: '';
      position: absolute;
      bottom: -6px;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: #ccc;
      transform: scaleX(0);
      transition: transform 0.3s ease;
    }

    &:hover::before {
      transform: scaleX(1);
    }
  }
`;

function Header() {
  return (
    <HeaderWrapper>
      <h1>Блог</h1>
    </HeaderWrapper>
  );
}

export default Header;
