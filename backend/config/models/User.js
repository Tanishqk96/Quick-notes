const mongoose = require('mongoose');

// In your User model file (e.g., models/User.js)
// models/User.js
const UserSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: { type: String, required: true }
});


const User = mongoose.model('User', UserSchema);
module.exports = User;