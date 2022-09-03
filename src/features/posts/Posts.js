import React from 'react';
import Post from './Post';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { fetchPosts, clearPosts } from './postsSlice';
import styles from './Posts.module.css';

const Posts = () => {
  const dispatch = useDispatch()
  const posts = useSelector(state => state.posts.posts)

  return (
    <div className={styles.container}>
      <div>
        <button onClick={() => dispatch(fetchPosts())}>Загрузить все посты</button>
        <button onClick={() => dispatch(clearPosts())}>Очистить список</button>
      </div>
      Posts:
      {
        posts.map(post => <Post key={post.id} {...post}/>)
      }
    </div>
  );
};

export default Posts;
