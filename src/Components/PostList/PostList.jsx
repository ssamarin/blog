import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import usePostsService from '../../services/PostsService';

import Post from '../Post';
import FullWidthPost from '../FullWidthPost';
import Spinner from '../Spinner';

const PostListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
`;

function PostList() {
  const { getAllPosts } = usePostsService();
  const posts = useSelector((state) => state.postsList.posts);
  const offset = useSelector((state) => state.postsList.offset);
  const postsLoadingStatus = useSelector((state) => state.postsList.postsLoadingStatus);

  useEffect(() => {
    getAllPosts();
  }, [offset]);

  if (postsLoadingStatus === 'loading') {
    return <Spinner />;
  }

  return (
    <PostListWrapper>
      {posts.map(({ id, title, body }, index) => (
        index === 0 ? (
          <FullWidthPost key={id} title={title} body={body} />
        ) : (
          <Post key={id} title={title} />
        )
      ))}
    </PostListWrapper>
  );
}

export default PostList;
