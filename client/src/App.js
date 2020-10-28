import React from 'react';
import PostCreate from './PostCreate';
import PostList from './PostList';
// eslint-disable-next-line
export default () => {
  return (
    <div className="container mt-4">
      <h1>Create Post</h1>
      <PostCreate />
      <br />
      <hr />
      <h2> Posts </h2>
      <PostList />
    </div>
  );
};
