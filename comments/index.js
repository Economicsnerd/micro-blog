const express = require('express');
const { randomBytes } = require('crypto');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const commentsByPostId = {};

app.get('/posts/:id/comments', (req, res) => {
  res.send(commentsByPostId[req.params.id || []]);
});

app.post('/posts/:id/comments', (req, res) => {
  // Randomly generate comment ID
  const commentId = randomBytes(4).toString('hex');

  const { content } = req.body;

  // Get existing comments or return an empty array
  const comments = commentsByPostId[req.params.id] || [];

  //   Push new comment into comments array
  comments.push({ id: commentId, content });

  //   Assign given comment to post by ID
  commentsByPostId[req.params.id] = comments;

  //   Send back entire array of comments
  res.status(201).send(comments);
});

app.listen(4001, () => {
  console.log('Listening on 4001');
});
