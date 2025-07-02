const mongoose = require('mongoose');
const { Schema } = mongoose;

const jobSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Job title is required'],
    trim: true
  },
  department: {
    type: String,
    required: true,
    enum: ['Engineering', 'Research', 'Product', 'Operations']
  },
  location: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true,
    enum: ['Full-time', 'Part-time', 'Contract', 'Internship']
  },
  description: {
    type: String,
    required: true
  },
  requirements: {
    type: [String],
    default: []
  },
  isActive: {
    type: Boolean,
    default: true
  },
  postedAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Job', jobSchema);
