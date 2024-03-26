import React from 'react';

import Header from '../Components/Header';
import SubHeader from '../Components/SubHeader';
import PostList from '../Components/PostList';
import Pagination from '../Components/Pagination';

function MainPage() {
  return (
    <>
      <Header />
      <main>
        <SubHeader />
        <PostList />
        <Pagination />
      </main>
    </>
  );
}

export default MainPage;
