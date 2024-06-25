const mongoose = require('mongoose');
const { Schema } = mongoose;

const urlSchema = new Schema(
  {
    longUrl: { type: String, required: true, minLength: 3 },
    shortUrl: { type: String, required: true, minLength: 3 },
    shortUrlId: { type: String, required: true, minLength: 3 },
    clicks: { type: Number, required: true, default: 0 },
    userId: { type: String }
  },
  { 
    timestamps: true
  }
)

const Url = mongoose.model('Url', urlSchema);

module.exports = Url;