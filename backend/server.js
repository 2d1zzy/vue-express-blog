const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

let posts = [];
let nextId = 1;

// Get all posts
app.get('/api/posts', (req, res) => {
  res.json(posts);
});

// Create a new post
app.post('/api/posts', (req, res) => {
  const { title, content, author } = req.body;
  if (!title || !content || !author) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  const post = {
    id: nextId++,
    title,
    content,
    author,
    createdAt: new Date().toISOString(),
  };
  posts.unshift(post);
  res.status(201).json(post);
});

// Get a single post
app.get('/api/posts/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const post = posts.find((p) => p.id === id);
  if (!post) {
    return res.status(404).json({ error: 'Post not found' });
  }
  res.json(post);
});

app.listen(PORT, () => {
  console.log(`Backend API running at http://localhost:${PORT}`);
});