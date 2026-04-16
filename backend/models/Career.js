const mongoose = require('mongoose');

const careerSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  applyingFor: {
    type: String,
    required: true,
    enum: ['job', 'internship'],
  },
  category: {
    type: String,
    required: true,
  },
  resumeUrl: {
    type: String,
    // required: true, // Bypassed for now
  },
  message: {
    type: String,
  },
}, { timestamps: true });

module.exports = mongoose.model('Career', careerSchema);
