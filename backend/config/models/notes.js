const mongoose = require('mongoose');
const noteSchema = mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
}, { timestamps: true });

module.exports = mongoose.model('Note', noteSchema);
