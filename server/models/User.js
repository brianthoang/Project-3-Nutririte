const mongoose = require('mongoose');

const { Schema } = mongoose;
const { bcrypt } = require('bcrypt');
const ShoppingCart = require('./ShoppingCart');

const userSchema = new Schema({

  Name: {
    type: String,
    required: true,
    trim: true
  },

  Email: {
    type: String,
    required: true,
    unique: true
  },

  Password: {
    type: String,
    required: true,
    minlength: 6
  },

  ShoppingCart: [ShoppingCart.schema]
});

// set up pre-save middleware to create password
userSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('Password')) {
    const saltRounds = 10;
    this.Password = await bcrypt.hash(this.Password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function(password) {
  return await bcrypt.compare(password, this.Password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;

