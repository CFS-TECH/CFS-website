const express = require('express');
const router = express.Router();
const { subscribe, getSubscribers, deleteSubscriber } = require('../controllers/newsletterController');
const { protect } = require('../middleware/authMiddleware');

router.route('/')
  .post(subscribe)
  .get(protect, getSubscribers);

router.route('/:id')
  .delete(protect, deleteSubscriber);

module.exports = router;
