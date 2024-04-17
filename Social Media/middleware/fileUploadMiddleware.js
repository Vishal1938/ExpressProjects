
import multer from 'multer';


// Set up multer for file upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Destination directory for uploaded files
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Use original file name for uploaded files
  }
});

const fileUpload = multer({ storage: storage });

export default fileUpload;
