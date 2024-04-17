class Post {
    constructor(id, userId, caption, imageUrl) {
      this.id = id;
      this.userId = userId;
      this.caption = caption;
      this.imageUrl = imageUrl; 
    }
  }

// Mock database representing posts
export const posts = [];

// Function to create a new post
export const createPost = (title, content, userId) => {
  const id = posts.length + 1;
  const newPost = { id, title, content, userId };
  posts.push(newPost);
  return newPost;
};

// Function to retrieve all posts
export const getAllPosts = () => {
  return posts;
};

// Function to retrieve user-specific posts
export const getUserPosts = (userId) => {
  return posts.filter(post => post.userId === userId);
};

// Function to get a post by its ID
export const getPostById = (postId) => {
  return posts.find(post => post.id === postId);
};

// Function to update a post
export const updatePost = (postId, updatedData) => {
  const index = posts.findIndex(post => post.id === postId);
  if (index !== -1) {
    posts[index] = { ...posts[index], ...updatedData };
    return posts[index];
  }
  return null; // Return null if post with given ID is not found
};

// Function to delete a post
export const deletePost = (postId) => {
  const index = posts.findIndex(post => post.id === postId);
  if (index !== -1) {
    const deletedPost = posts.splice(index, 1);
    return deletedPost[0];
  }
  return null; // Return null if post with given ID is not found
};

