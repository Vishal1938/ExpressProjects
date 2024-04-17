
import express from 'express';
import {
  getAllCommentsByPostId,
  addComment,
  deleteCommentHandler,
  updateCommentHandler
} from '../Controller/commentController.js';


const router = express.Router();

// Route to retrieve all comments for a specific post
router.get('/id/:postId', getAllCommentsByPostId);

// Route to add a new comment to a specific post
router.post('/:postId', addComment);

// Route to delete a specific comment by ID
router.delete('/:id', deleteCommentHandler);

// Route to update a specific comment by ID
router.put('/:id', updateCommentHandler);

export default router;
