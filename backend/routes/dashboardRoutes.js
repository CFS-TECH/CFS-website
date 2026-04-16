const express = require('express');
const router = express.Router();
const { getDashboardStats, getRecentActivity } = require('../controllers/dashboardController');

// TODO: Add protect/admin middleware if needed, although simple UI might not require it yet
// or the existing auth logic might handle it.
router.get('/stats', getDashboardStats);
router.get('/recent', getRecentActivity);

module.exports = router;
