// Require necessary functions from comment.js
import {
  createComment,
  getCommentsByPostId,
  updateComment,
  deleteComment
} from '../model/comment.js';

// Function to handle creating a new comment
export const addComment = (req, res) => {
  const { postId, text, userId } = req.body;

  // Create a new comment
  const newComment = createComment(postId, text, userId);

  res.status(201).json({ message: 'Comment created successfully', comment: newComment });
};

// Function to handle retrieving all comments by post
export const getAllCommentsByPostId = (req, res) => {
  const { postId } = req.params;
  const postComments = getCommentsByPostId(parseInt(postId));
  res.status(200).json(postComments);
};

// Function to handle updating a comment
export const updateCommentHandler = (req, res) => {
  const { commentId } = req.params;
  const { text } = req.body;

  const updatedComment = updateComment(parseInt(commentId), text);
  if (updatedComment) {
    res.status(200).json({ message: 'Comment updated successfully', comment: updatedComment });
  } else {
    res.status(404).json({ message: 'Comment not found' });
  }
};

// Function to handle deleting a comment
export const deleteCommentHandler = (req, res) => {
  const { commentId } = req.params;
  const deletedComment = deleteComment(parseInt(commentId));
  if (deletedComment) {
    res.status(200).json({ message: 'Comment deleted successfully', comment: deletedComment });
  } else {
    res.status(404).json({ message: 'Comment not found' });
  }
};
