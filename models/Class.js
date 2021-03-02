const { Schema, model } = require('mongoose');

const ClassSchema = new Schema({
  name: {
    type: String,
    required: [true, 'The name of the class is required'],
    trim: true
  },
  description: {
    type: String,
    default: 'Description of the video class.',
    trim: true
  },
  length: {
    type: Number,
    default: 0
  },
  category: {
    type: String,
    default: 'Category'
  },
  tags: [{
    type: String,
    default: []
  }],
  videoUrl: {
    type: String,
    default: 'url'
  },
  totalComments: {
    type: Number,
    default: 0
  },
  thumbnailUrl: {
    type: String,
    default: 'thumbnailUrl'
  },
  totalLikes: {
    type: Number,
    default: 0
  },
  avgRate: {
    type: Number,
    default: 0
  },
  instructor: {
    type: String,
    default: 'instructor'
  },
});

module.exports = model('Class', ClassSchema);