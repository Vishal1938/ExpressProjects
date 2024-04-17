class Like {
    constructor(id, name, email, password) {
      this.id = id;
      this.userId = this.userId;
      this.postId = this.postId;
    }
  }
  
// Mock database representing likes
let likes = [];

// Function to add a like
export const addLike = (postId, userId) => {
  const existingLike = likes.find(like => like.postId === postId && like.userId === userId);
  if (!existingLike) {
    const newLike = { postId, userId };
    likes.push(newLike);
    return newLike;
  }
  return null; // Return null if the like already exists
};

// Function to remove a like
export const removeLike = (postId, userId) => {
  const index = likes.findIndex(like => like.postId === postId && like.userId === userId);
  if (index !== -1) {
    const removedLike = likes.splice(index, 1);
    return removedLike[0];
  }
  return null; // Return null if the like doesn't exist
};

// Function to retrieve all likes on a specific post
export const getLikesByPostId = (postId) => {
  return likes.filter(like => like.postId === postId);
};

