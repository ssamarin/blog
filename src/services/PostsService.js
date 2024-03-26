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
      const resp = await request();
      dispatch(postsFetched(resp.slice(+offset, +limit)));
    } catch (e) {
      dispatch(postsFetchingError());
      console.error(e);
    }
  };

  return {
    getAllPosts,
  };
}

export default usePostsService;
