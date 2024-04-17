class comment {
    constructor(id, name, email, password) {
      this.id = id;
      this.userId = this.userId;
      this.postId = this.postId;
      this.content = content; 
    }
  }

// Mock database representing comments
let comments = [];

// Function to create a new comment
export const createComment = (postId, text, userId) => {
  const id = comments.length + 1;
  const newComment = { id, postId, text, userId };
  comments.push(newComment);
  return newComment;
};

// Function to retrieve all comments by post
export const getCommentsByPostId = (postId) => {
  return comments.filter(comment => comment.postId === postId);
};

// Function to update a comment
export const updateComment = (commentId, text) => {
  const index = comments.findIndex(comment => comment.id === commentId);
  if (index !== -1) {
    comments[index].text = text;
    return comments[index];
  }
  return null; // Return null if comment with given ID is not found
};

// Function to delete a comment
export const deleteComment = (commentId) => {
  const index = comments.findIndex(comment => comment.id === commentId);
  if (index !== -1) {
    const deletedComment = comments.splice(index, 1);
    return deletedComment[0];
  }
  return null; // Return null if comment with given ID is not found
};



  

