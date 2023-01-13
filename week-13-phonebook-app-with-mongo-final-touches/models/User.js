const mongoose = require("mongoose")

const ContactSchema = require('./Contact');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },

  role: {
    type: String,
    required: false,
    default: 'user',
  },

  contacts: [ContactSchema],

  createAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
})

module.exports = mongoose.model("users", UserSchema)
