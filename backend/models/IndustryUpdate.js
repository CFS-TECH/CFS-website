const mongoose = require('mongoose');

const industryUpdateSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: ["Fintech", "Digital Marketing", "Web Dev", "SEO", "Other", "Tech & Software", "Business Support"],
    default: "Tech & Software"
  },
  image: {
    type: String,
    default: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1200"
  },
  readTime: {
    type: String,
    default: "5 min"
  },
  featured: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

module.exports = mongoose.model('IndustryUpdate', industryUpdateSchema);
