const express = require('express');
const router = express.Router();
const { upload } = require('../config/cloudinary');
const {
  submitApplication,
  getApplications,
  deleteApplication
} = require('../controllers/careerController');

// Submit application with file upload
router.post('/', upload.single('resume'), submitApplication);

// Get and Delete applications (Add protect middleware later)
router.get('/', getApplications);
router.delete('/:id', deleteApplication);

module.exports = router;
