
import {addLike,removeLike,getLikesByPostId} from '../model/Like.js'
// Function to handle adding a like
export const addLikeHandler = (req, res) => {
  const { postId, userId } = req.body;

  // Add the like
  const newLike = addLike(postId, userId);
  if (newLike) {
    res.status(201).json({ message: 'Like added successfully', like: newLike });
  } else {
    res.status(400).json({ message: 'Like already exists' });
  }
};

// Function to handle removing a like
export const removeLikeHandler = (req, res) => {
  const { postId, userId } = req.body;

  // Remove the like
  const removedLike = removeLike(postId, userId);
  if (removedLike) {
    res.status(200).json({ message: 'Like removed successfully', like: removedLike });
  } else {
    res.status(404).json({ message: 'Like not found' });
  }
};

// Function to handle retrieving all likes on a specific post
export const getLikesByPostIdHandler = (req, res) => {
  const { postId } = req.params;
  const postLikes = getLikesByPostId(parseInt(postId));
  res.status(200).json(postLikes);
};
