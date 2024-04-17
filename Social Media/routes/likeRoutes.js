import express from 'express';
import {
  getLikesByPostIdHandler,
  
} from '../Controller/likeController.js';

const router = express.Router();

// Route to retrieve all likes for a specific post
router.get('/:postId', getLikesByPostIdHandler);

// Route to toggle like status for a specific post
//router.get('/toggle/:postId', toggleLike);

export default router;
