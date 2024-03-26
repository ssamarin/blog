import React from 'react';

import Header from '../Components/Header';
import SubHeader from '../Components/SubHeader';
import PostList from '../Components/PostList';

function MainPage() {
  return (
    <>
      <Header />
      <main>
        <SubHeader />
        <PostList />
      </main>
    </>
  );
}

export default MainPage;
