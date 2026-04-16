const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['popup', 'quote', 'contact'],
    required: true,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  companyName: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  service: {
    type: String,
  },
  subject: {
    type: String,
  },
  message: {
    type: String,
  },
}, { timestamps: true });

module.exports = mongoose.model('Lead', leadSchema);
