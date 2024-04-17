

import {posts,createPost,getAllPosts,getUserPosts,getPostById,updatePost,deletePost} from "../model/Post.js";
import CustomError from '../middleware/customerror.js';
// Function to handle creating a new post
export const addPost = (req, res) => {
  const { title, content, userId } = req.body;

  // Create a new post
  const newPost = createPost(title, content, userId);

  res.status(201).json({ message: 'Post created successfully', post: newPost });
};


// Function to handle retrieving all posts
export const getAllPostsHandler = (req, res) => {
  const posts = getAllPosts();
  res.status(200).json(posts);
};

// Function to handle retrieving user-specific posts
export const getUserPostsHandler = (req, res) => {
  const { userId } = req.params;
  const userPosts = getUserPosts(parseInt(userId));
  res.status(200).json(userPosts);
};

// Function to handle retrieving a post by its ID
export const getPostByIdHandler = (req, res) => {
  const { postId } = req.params;
  const post = getPostById(parseInt(postId));
  if (post) {
    res.status(200).json(post);
  } else {
    res.status(404).json({ message: 'Post not found' });
  }
};

// Function to handle updating a post
export const updatePostHandler = (req, res) => {
  const { postId } = req.params;
  const { title, content } = req.body;

  const updatedPost = updatePost(parseInt(postId), { title, content });
  if (updatedPost) {
    res.status(200).json({ message: 'Post updated successfully', post: updatedPost });
  } else {
    res.status(404).json({ message: 'Post not found' });
  }
};

// Function to handle deleting a post
export const deletePostHandler = (req, res) => {
  const { postId } = req.params;
  const deletedPost = deletePost(parseInt(postId));
  if (deletedPost) {
    res.status(200).json({ message: 'Post deleted successfully', post: deletedPost });
  } else {
    res.status(404).json({ message: 'Post not found' });
  }
};

// Function to filter posts based on caption
export const filterPostsByCaption = async (req, res, next) => {
  try {
    const { caption } = req.query;

    if (!caption) {
      throw new CustomError('Caption parameter is missing', 400);
    }

    const filteredPosts = await posts.find({ caption: { $regex: caption, $options: 'i' } });

    res.status(200).json(filteredPosts);
  } catch (error) {
    next(error);
  }
};

// Function to save a post as a draft
export const savePostAsDraft = (req, res) => {
  const { caption, content } = req.body;

  if (!caption || !content) {
    return res.status(400).json({ error: 'Caption and content are required' });
  }

  const newPost = {
    id: posts.length + 1, // Generate unique ID for the post
    caption,
    content,
    isDraft: true,
  };

  posts.push(newPost);

  res.status(201).json(newPost);
};

// Function to archive a post
export const archivePost = (req, res) => {
  const postId = parseInt(req.params.id);

  const index = posts.findIndex(post => post.id === postId);
  if (index === -1) {
    return res.status(404).json({ error: 'Post not found' });
  }

  posts[index].isArchived = true;

  res.status(200).json({ message: 'Post archived successfully' });
};

// Function to sort posts based on user engagement (likes, comments)
export const sortPostsByEngagement = (req, res) => {
  // Sorting logic based on user engagement
  // Example: Sort posts based on the number of likes
  const sortedPosts = posts.sort((a, b) => b.likes - a.likes);

  res.status(200).json(sortedPosts);
};

// Function to sort posts by date
export const sortPostsByDate = (req, res) => {
  // Sorting logic based on date
  // Example: Sort posts based on the creation date
  const sortedPosts = posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  res.status(200).json(sortedPosts);
};
