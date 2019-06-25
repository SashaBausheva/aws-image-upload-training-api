const mongoose = require('mongoose')

const uploadSchema = new mongoose.Schema({
  description: {
    type: String,
    required: false
  },
  url: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Upload', uploadSchema)
