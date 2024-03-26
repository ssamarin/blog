import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  margin-bottom: 24px;
  padding-top: 64px;

  h1 {
    position: relative;
    color: #0a0a0a;
    font-weight: 700;
    font-size: 60px;
    line-height: 113%;
    text-align: center;
    cursor: pointer;
    transition: transform 0.6s ease;

    &::before {
      position: absolute;
      bottom: -6px;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: #ccc;
      transform: scaleX(0);
      transition: transform 0.3s ease;
      content: "";
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
