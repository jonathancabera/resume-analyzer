// middleware function to upload resumé in chatbox
import multer from "multer";

const upload = multer({
  limits: { fileSize: 5 * 1024 * 1024 }
});

export default upload;
