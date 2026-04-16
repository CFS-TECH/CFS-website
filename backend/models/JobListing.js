const mongoose = require('mongoose');

const jobListingSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
    default: 'Crossover Fintech Support'
  },
  location: {
    type: String,
    required: true,
  },
  compensation: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
    enum: ['job', 'internship']
  },
  category: {
    type: String,
    required: true,
    default: 'IT Services'
  },
  description: {
    type: String,
  },
  responsibilities: {
    type: [String],
    default: []
  },
  requirements: {
    type: [String],
    default: []
  },
  skills: {
    type: [String],
    default: []
  },
  benefits: {
    type: [String],
    default: []
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, { timestamps: true });

module.exports = mongoose.model('JobListing', jobListingSchema);
