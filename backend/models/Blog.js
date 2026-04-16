const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  content: {
    type: String,
    required: true,
  },
  excerpt: {
    type: String,
  },
  image: {
    type: String,
  },
  category: {
    type: String,
  },
  section: {
    type: String,
    enum: ['none', 'featured', 'latest', 'learning-hub', 'all'],
    default: 'none'
  },
  readTime: {
    type: String,
    default: '5 min'
  },
  author: {
    type: String,
    default: 'Crossover Admin'
  },
  authorImg: {
    type: String,
  },
  tags: {
    type: [String],
  },
  status: {
    type: String,
    enum: ['draft', 'published'],
    default: 'draft'
  }
}, { timestamps: true });

module.exports = mongoose.model('Blog', blogSchema);
