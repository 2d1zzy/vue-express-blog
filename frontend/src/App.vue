<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const posts = ref([])
const form = ref({ title: '', author: '', content: '' })

const fetchPosts = async () => {
  const res = await axios.get('http://localhost:3001/api/posts')
  posts.value = res.data
}

const createPost = async () => {
  await axios.post('http://localhost:3001/api/posts', form.value)
  form.value = { title: '', author: '', content: '' }
  fetchPosts()
}

const formatDate = (iso) => new Date(iso).toLocaleString()

onMounted(fetchPosts)
</script>

<template>
  <div class="container">
    <h1>My Blog</h1>
    <form @submit.prevent="createPost" class="post-form">
      <input v-model="form.title" placeholder="Title" required />
      <input v-model="form.author" placeholder="Author" required />
      <textarea v-model="form.content" placeholder="Content" required></textarea>
      <button type="submit">Create Post</button>
    </form>
    <div v-if="posts.length === 0" class="empty">No posts yet.</div>
    <div v-for="post in posts" :key="post.id" class="post">
      <h2>{{ post.title }}</h2>
      <p class="meta">By {{ post.author }} on {{ formatDate(post.createdAt) }}</p>
      <p>{{ post.content }}</p>
    </div>
  </div>
</template>

<style>
body {
  background: #23272f;
  font-family: 'Segoe UI', 'Roboto', 'Arial', sans-serif;
  margin: 0;
  padding: 0;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  width: 60vw;
  margin: 2rem auto;
  background: #2c313a;
  padding: 3rem 3rem 2rem 3rem;
  border-radius: 12px;
  box-shadow: 0 2px 24px #0006;
  
}

h1 {
  text-align: center;
  margin-bottom: 2rem;
  color: #42b883;
  letter-spacing: 2px;
  font-size: 2.5rem;
}

.post-form {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 2.5rem;
}

.post-form input,
.post-form textarea {
  padding: 0.75rem;
  border: 1px solid #35495e;
  border-radius: 4px;
  background: #23272f;
  color: #fff;
  font-size: 1.1rem;
  transition: border 0.2s;
}

.post-form input:focus,
.post-form textarea:focus {
  border: 1.5px solid #42b883;
  outline: none;
}

.post-form button {
  align-self: flex-end;
  padding: 0.75rem 2rem;
  background: linear-gradient(90deg, #42b883 60%, #35495e 100%);
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  letter-spacing: 1px;
  font-size: 1.1rem;
  transition: background 0.2s;
}

.post-form button:hover {
  background: linear-gradient(90deg, #35495e 60%, #42b883 100%);
}

.post {
  border-bottom: 1px solid #35495e;
  padding: 1.5rem 0;
}

.post:last-child {
  border-bottom: none;
}

h2 {
  color: #42b883;
  margin-bottom: 0.2rem;
  font-size: 2rem;
}

.meta {
  color: #b8c2cc;
  font-size: 1em;
  margin-bottom: 0.5rem;
}

.empty {
  text-align: center;
  color: #aaa;
  margin: 2rem 0;
  font-size: 1.2rem;
}
</style>
