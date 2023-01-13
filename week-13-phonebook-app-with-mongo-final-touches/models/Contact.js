const mongoose = require("mongoose")

const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    unique: true,
  },
  email: {
    type: String,
  },
  address: {
    type: String,
    required: false,
    default: null,
  },

  createAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
})

module.exports = ContactSchema
// module.exports = mongoose.model("contacts", ContactSchema)
