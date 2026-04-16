const express = require('express');
const router = express.Router();
const {
  createBlog,
  getBlogs,
  getBlogBySlug,
  updateBlog,
  deleteBlog
} = require('../controllers/blogController');
const { protect } = require('../middleware/authMiddleware');

router.route('/')
  .post(protect, createBlog)
  .get(getBlogs);

router.route('/:id')
  .put(protect, updateBlog)
  .delete(protect, deleteBlog);

router.route('/:slug')
  .get(getBlogBySlug);

module.exports = router;
