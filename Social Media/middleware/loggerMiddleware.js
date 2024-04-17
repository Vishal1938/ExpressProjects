

const logger = (req, res, next) => {
    if (req.path.includes('/api/users')) {
      // Skip logging for user routes
      next();
    } else {
      console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
      console.log('Request Body:', req.body);
      next();
    }
  };
  
  export default logger;
  