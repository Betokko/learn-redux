import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [],
  status: 'idle',
  error: null,
};

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  return data;
});

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    clearPosts: (state) => {
      state.posts = [];
    },
    removePost: (state, actions) => {
      state.posts = state.posts.filter(post => post.id !== actions.payload)
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, actions) => {
        state.posts = actions.payload;
        state.status = 'idle';
      })
      .addCase(fetchPosts.rejected, (stete) => {
        stete.error = 'error';
      });
  },
});
export const { clearPosts, removePost } = postsSlice.actions;
export default postsSlice.reducer;
