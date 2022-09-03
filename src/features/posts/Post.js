import React from 'react'
import styles from './Posts.module.css'
import { removePost } from './postsSlice'
import { useDispatch } from 'react-redux'

const Post = ({id, title, body}) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.post}>
      <strong>{id}. {title}</strong>
      <p>{body}</p>
      <button onClick={() => dispatch(removePost(id)) }>Удалить пост</button>
    </div>
  )
}

export default Post