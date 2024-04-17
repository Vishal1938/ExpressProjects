
import express from 'express';
import {registerUser,loginUser} from '../Controller/userController.js';

const router = express.Router();

// Route to register a new user account
router.post('/signup', registerUser);

// Route to log in as a user
router.post('/login', loginUser);

export default router;
