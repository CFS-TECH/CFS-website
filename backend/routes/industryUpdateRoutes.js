const express = require('express');
const router = express.Router();
const { getUpdates, createUpdate, updateSingle, deleteUpdate } = require('../controllers/industryUpdateController');
const { protect } = require('../middleware/authMiddleware');

router.route('/')
  .get(getUpdates)
  .post(protect, createUpdate);

router.route('/:id')
  .put(protect, updateSingle)
  .delete(protect, deleteUpdate);

module.exports = router;
