import express from "express";
import { errorHandler } from './middleware/errorMiddleware.js';
import fileUpload from './middleware/fileUploadMiddleware.js';
import userRoutes from './routes/userRoutes.js';
import postRoutes from './routes/postRoutes.js';
import commentRoutes from './routes/commentRoutes.js';
import likeRoutes from './routes/likeRoutes.js';
import authenticateToken from './middleware/authMiddleware.js'

const app = express();

// Use file upload middleware for routes that handle file uploads
app.use('/api/posts', fileUpload.single('image'), postRoutes);

// Use user routes
app.use('/api/users', authenticateToken, userRoutes);

// Use comment routes
app.use('/api/comments', commentRoutes);

// Use like routes
app.use('/api/likes', likeRoutes);

// Use error handling middleware
app.use(errorHandler);

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
