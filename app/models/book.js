const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
  time: {
    type: String,
    required: true
  },
  in: {
    type: Number,
    required: true
  },
  out: {
    type: Number,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Book', bookSchema)
