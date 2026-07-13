const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['buyer', 'seller'], default: 'buyer' },
  // Hyperlocal Location Format (GeoJSON)
  location: {
    type: { type: String, default: 'Point' },
    coordinates: { type: [Number], required: true } // [longitude, latitude]
  }
}, { timestamps: true });

//  FIXED: Removed 'next' completely. Modern Mongoose automatically 
// handles the flow when an async function resolves its Promise!
UserSchema.pre('save', async function () {
  // If the password hasn't been changed, exit the function early
  if (!this.isModified('password')) return;

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Helper method to verify passwords later
UserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Indexing for Member 4's proximity search
UserSchema.index({ location: '2dsphere' });

module.exports = mongoose.model('User', UserSchema);