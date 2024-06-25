const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: { type: String, required: true, minLength: 3 },
    email: { type: String, required: true },
  },
  { 
    timestamps: true
  }
)

const User = mongoose.model('User', userSchema);

module.exports = User;