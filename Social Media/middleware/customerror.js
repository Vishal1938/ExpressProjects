

class customerror extends Error {
    constructor(message, statusCode) {
      super(message);
      this.statusCode = statusCode || 500;
    }
  }
  
  export default customerror;
  