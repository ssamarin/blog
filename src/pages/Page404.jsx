import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Wrapper404 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
  color: #333;
  font-size: 24px;

  p {
    margin-bottom: 20px;
  }

  a {
    display: flex;
    align-items: center;
    color: #666;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #333;
    }
  }
`;

function Page404() {
  return (
    <Wrapper404>
      <p>Страница не найдена, 404</p>
      <NavLink to="/">
        <p>Вернуться на главную страницу</p>
      </NavLink>
    </Wrapper404>
  );
}

export default Page404;
