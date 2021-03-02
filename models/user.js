const { model, Schema } = require('mongoose')

const definition = {
  email: {
    type: String,
    required: true,
    unique: true,
    index: true
  },
  password: {
    type: String,
    required: true
  },
  fullname: {
    type: String,
    required: false
  },
  weight: {
    type: Number,
    required: false
  },
  age: {
    type: Number,
    min: 8,
    max: 100,
    required: false
  },
  imc: {
    type: Number,
    required: false
  },
  activityLevel: {
    type: Number,
    required: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  lastLogin: {
    type: Date,
    required: false
  }
}

const user = new Schema(definition)

module.exports = model('User', user)
