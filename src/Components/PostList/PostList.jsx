import React, { useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import usePostsService from '../../services/PostsService';

import Post from '../Post';
import FullWidthPost from '../FullWidthPost';
import Pagination from '../Pagination';
import Spinner from '../Spinner';

const PostListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;

  @media (width <= 1240px) {
    grid-template-columns: 1fr;
    margin: 0 auto;
  }
`;

function PostList() {
  const { getAllPosts } = usePostsService();
  const posts = useSelector((state) => state.postsList.posts);
  const offset = useSelector((state) => state.postsList.offset);
  const postsLoadingStatus = useSelector((state) => state.postsList.postsLoadingStatus);
  const searchData = useSelector((state) => state.subHeader.searchData);

  const memoizedGetAllPosts = useMemo(() => getAllPosts, [getAllPosts]);

  useEffect(() => {
    memoizedGetAllPosts();
  }, [offset]);

  const searchPosts = (search) => {
    if (search.length === 0) {
      return posts;
    }
    const pageSearchingPosts = posts.filter(
      (post) => post.title.indexOf(search) > -1,
    );
    return pageSearchingPosts;
  };

  useEffect(() => {
    searchPosts(searchData);
  }, [searchData]);

  const visiblePosts = searchPosts(searchData);

  if (visiblePosts.length === 0 && postsLoadingStatus !== 'loading') {
    return <div className="empty">Посты не найдены</div>;
  }

  if (postsLoadingStatus === 'loading') {
    return <Spinner />;
  }

  return (
    <>
      <PostListWrapper>
        {visiblePosts.map(({ id, title, body }, index) => (
          index === 0 ? (
            <FullWidthPost key={id} id={id} title={title} body={body} />
          ) : (
            <Post key={id} id={id} title={title} body={body} />
          )
        ))}
      </PostListWrapper>
      <Pagination />
    </>
  );
}

export default PostList;
