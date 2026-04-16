const IndustryUpdate = require('../models/IndustryUpdate');

// @desc    Get all industry updates
// @route   GET /api/industry-updates
// @access  Public
const getUpdates = async (req, res) => {
  try {
    const updates = await IndustryUpdate.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, count: updates.length, data: updates });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

// @desc    Create new industry update
// @route   POST /api/industry-updates
// @access  Private/Admin
const createUpdate = async (req, res) => {
  try {
    const update = await IndustryUpdate.create(req.body);
    res.status(201).json({ success: true, data: update });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// @desc    Update single industry update
// @route   PUT /api/industry-updates/:id
// @access  Private/Admin
const updateSingle = async (req, res) => {
  try {
    const update = await IndustryUpdate.findByIdAndUpdate(
      req.params.id, 
      req.body, 
      { returnDocument: 'after', runValidators: true }
    );
    
    if (!update) {
      return res.status(404).json({ success: false, message: 'Insight not found in database. It may have been deleted.' });
    }
    
    res.status(200).json({ success: true, data: update });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// @desc    Delete industry update
// @route   DELETE /api/industry-updates/:id
// @access  Private/Admin
const deleteUpdate = async (req, res) => {
  try {
    const update = await IndustryUpdate.findByIdAndDelete(req.params.id);
    if (!update) {
      return res.status(404).json({ success: false, message: 'Update not found' });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

module.exports = {
  getUpdates,
  createUpdate,
  updateSingle,
  deleteUpdate
};
