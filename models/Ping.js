const { Schema, model } = require('mongoose');

const PingSchema = new Schema({
  email: {
    type: String,
    required: [true, 'The email of attendee is required']
  },
  name: {
    type: String
  },
});

module.exports = model('Ping', PingSchema);