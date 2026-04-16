const express = require('express');
const router = express.Router();
const { submitLead, getLeads, deleteLead } = require('../controllers/leadController');
// const { protect } = require('../middleware/authMiddleware'); // Will add later

router.route('/')
  .post(submitLead)
  .get(getLeads); // Add protect middleware later

router.route('/:id')
  .delete(deleteLead); // Add protect middleware later

module.exports = router;
