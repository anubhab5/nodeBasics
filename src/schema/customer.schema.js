const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  name: { type: String, require: true, minlength: 5, maxlength: 50 },
  isGold: { type: Boolean, default: false },
  phone: { type: String, minlength: 10, maxlength: 10, unique: true },
});

module.exports.customerSchema = customerSchema;
