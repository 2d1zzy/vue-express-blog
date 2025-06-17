# Blog Application

A full-stack blog application built with Node.js, Express.js, and Vue.js. Create and view blog posts with a clean, minimal interface.

## Features

- Create new blog posts
- View all blog posts in a clean card layout
- Responsive design for mobile and desktop
- In-memory storage (posts don't persist between sessions)

## Tech Stack

**Backend:**
- Node.js
- Express.js
- CORS middleware

**Frontend:**
- Vue.js 3
- Vite
- Modern CSS

## Project Setup

### Prerequisites
- Node.js (v16 or higher)
- npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/blog-app.git
cd blog-app
```

2. Install backend dependencies:
```bash
cd backend
npm install
```

3. Install frontend dependencies:
```bash
cd ..
npm install
```

### Running the Application

**Start the backend server:**
```bash
cd backend
npm run dev
```
Backend runs on `http://localhost:3001`

**Start the frontend development server:**
```bash
npm run dev
```
Frontend runs on `http://localhost:5173`

## API Endpoints

- `GET /api/posts` - Get all blog posts
- `POST /api/posts` - Create a new blog post
- `GET /api/posts/:id` - Get a specific blog post

## Project Structure

```
blog-app/
├── backend/
│   ├── server.js          # Express server
│   └── package.json       # Backend dependencies
├── src/
│   ├── components/
│   │   ├── BlogList.vue   # Display all posts
│   │   └── CreatePost.vue # Create new posts
│   └── App.vue            # Main app component
├── package.json           # Frontend dependencies
└── README.md
```

## Future Enhancements

- Database integration for persistent storage
- User authentication
- Post editing and deletion
- Categories and tags
- Search functionality

## License

MIT
