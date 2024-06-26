import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Spinner from '../Spinner';
import MainPage from '../../pages/MainPage';
import PostPage from '../../pages/PostPage';
import Page404 from '../../pages/Page404';

function App() {
  return (
    <Router>
      <div className="app">
        <Suspense fallback={<Spinner />} />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="*" element={<Page404 />} />
          <Route path="/post/:id" element={<PostPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
