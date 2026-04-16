const Career = require('../models/Career');

// @desc    Submit a career application
// @route   POST /api/careers
// @access  Public
const submitApplication = async (req, res) => {
  try {
    const { fullName, email, phone, applyingFor, category, message } = req.body;
    
    // Resume file URL from Cloudinary (via multer) (bypassed requirement for now)
    const resumeUrl = req.file ? req.file.path : null;

    const application = await Career.create({
      fullName,
      email,
      phone,
      applyingFor,
      category,
      resumeUrl,
      message
    });

    res.status(201).json({
      success: true,
      data: application
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Get all career applications
// @route   GET /api/careers
// @access  Private/Admin
const getApplications = async (req, res) => {
  try {
    const applications = await Career.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: applications.length,
      data: applications
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error'
    });
  }
};

// @desc    Delete a career application
// @route   DELETE /api/careers/:id
// @access  Private/Admin
const deleteApplication = async (req, res) => {
  try {
    const application = await Career.findByIdAndDelete(req.params.id);
    if (!application) {
      return res.status(404).json({ success: false, message: 'Application not found' });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

module.exports = {
  submitApplication,
  getApplications,
  deleteApplication
};
