const mongoose = require("mongoose");

const rentalSchema = new mongoose.Schema({
  customer: {
    type: new mongoose.Schema({
      name: {
        type: String,
        require: true,
      },
      isGold: {
        type: Boolean,
        default: false,
      },
      phone: {
        type: String,
      },
    }),
    required: true,
  },
  movie: {
    type: new mongoose.Schema({
      title: {
        type: String,
        required: true,
        trim: true,
        minlength: 5,
        maxlength: 255,
      },
      dailyRentalRate: {
        type: Number,
        required: true,
        min: 0,
        max: 255,
      },
      dateOut: {
        type: Date,
        default: Date.now,
        required: true,
      },
      dateReturned: {
        type: Date,
      },
      rentalFee: {
        type: Number,
        min: 0,
      },
    }),
    require: true,
  },
});

module.exports.rentalSchema = rentalSchema;
