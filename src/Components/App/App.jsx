import React from 'react';

import Header from '../Header';
import SubHeader from '../SubHeader';
import PostList from '../PostList';
import Pagination from '../Pagination';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <SubHeader />
        <PostList />
        <Pagination />
      </main>
    </div>
  );
}

export default App;
