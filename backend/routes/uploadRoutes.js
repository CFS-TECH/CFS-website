const express = require('express');
const router = express.Router();
const { upload } = require('../config/cloudinary');
const { protect } = require('../middleware/authMiddleware');

// @desc    Upload single image to Cloudinary
// @route   POST /api/upload
// @access  Private/Admin
router.post('/', protect, upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ success: false, message: 'No file uploaded' });
  }

  res.status(200).json({
    success: true,
    url: req.file.path, // Cloudinary secure URL
    public_id: req.file.filename
  });
});

module.exports = router;
