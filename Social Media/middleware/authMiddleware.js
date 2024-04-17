import CustomError from './customerror.js'
import jwt from 'jsonwebtoken'
// Require necessary modules

const authenticateToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return next(new CustomError('Unauthorized', 401));
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return next(new CustomError('Invalid token', 401));
    }
    req.user = user;
    next();
  });
};

export default authenticateToken;
