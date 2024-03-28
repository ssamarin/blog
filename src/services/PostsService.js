import { useSelector, useDispatch } from 'react-redux';

import useHttp from '../hooks/http.hook';
import {
  postsFetching,
  postsFetched,
  postsFetchingError,
} from '../Components/PostList/postListSlice';

function usePostsService() {
  const dispatch = useDispatch();
  const { request } = useHttp();
  const offset = useSelector((state) => state.postsList.offset);
  const limit = useSelector((state) => state.postsList.limit);

  const getAllPosts = async () => {
    dispatch(postsFetching());
    try {
      const resp = await request('https://jsonplaceholder.typicode.com/posts');
      dispatch(postsFetched(resp.slice(+offset, +limit)));
    } catch (e) {
      dispatch(postsFetchingError());
    }
  };

  const filterByName = async (title) => {
    dispatch(postsFetching());
    try {
      const encodedString = title.replace(/ /g, '%20');
      const resp = await request(`https://jsonplaceholder.typicode.com/posts?title=${encodedString}`);
      dispatch(postsFetched(resp));
    } catch (e) {
      dispatch(postsFetchingError());
    }
  };

  return {
    getAllPosts,
    filterByName,
  };
}

export default usePostsService;
