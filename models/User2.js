const mongoose = require("mongoose");
// test
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  lastName: {
    type: String,
  },
  username: {
    type: String,
    unique: true,
    required: true,
  },
  insurancePlan: {
    type: Number
  },
  password: {
    type: String,
    required: true,
  },
  userRole: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'userRole'
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = User = mongoose.model("user", UserSchema);
