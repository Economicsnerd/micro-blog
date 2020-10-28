import React, { useState } from 'react';
import axios from 'axios';
// eslint-disable-next-line
export default () => {
  const [title, setTitle] = useState('');
  const onSubmit = async (event) => {
    event.preventDefault();

    // Make a request to our posts microservice
    await axios.post('http://localhost:4000/posts', {
      title,
    });

    setTitle('');
  };

  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="">Title</label>
          <input
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};
