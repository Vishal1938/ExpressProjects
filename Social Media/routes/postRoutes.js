
//Require express module
import express from 'express';

// Require multer module
import multer from 'multer';

// Require necessary functions from postController.js
import {
  savePostAsDraft,
  archivePost,
  filterPostsByCaption,
  getAllPostsHandler,
  getPostByIdHandler,
  getUserPostsHandler,
  addPost,
  deletePostHandler,
  updatePostHandler,
  sortPostsByDate,
  sortPostsByEngagement
} from '../Controller/postController.js';
const router = express.Router();

// Define multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Destination folder for uploaded files
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // Define filename
  }
});

// Initialize multer with the storage configuration
const upload = multer({ storage: storage });

// Route to retrieve all posts
router.get('/all', getAllPostsHandler);

// Route to retrieve a specific post by ID
router.get('/:id', getPostByIdHandler);

// Route to retrieve posts based on user credentials
router.get('/', getUserPostsHandler);

// Route to create a new post (including image upload functionality)
router.post('/', upload.single('image'), addPost);

// Route to delete a specific post by ID
router.delete('/:id', deletePostHandler);

// Route to update a specific post by ID (including image upload functionality)
router.put('/:id', upload.single('image'), updatePostHandler);

// Route to filter posts based on caption
router.get('/filter', filterPostsByCaption);


// Route to save a post as a draft
router.post('/draft', savePostAsDraft);

// Route to archive a post
router.put('/archive/:id', archivePost);

// Route to sort posts based on user engagement
router.get('/sort/engagement', sortPostsByEngagement);

// Route to sort posts by date
router.get('/sort/date', sortPostsByDate);

export default router;
