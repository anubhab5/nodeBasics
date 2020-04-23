const mongoose = require("mongoose");
const { genreSchema } = require("./genre.schema");

const moviesSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  numberInStock: { type: Number, default: 0, min: 0 },
  dailyRentalRate: { type: Number, default: 0, min: 0 },
  genre: {
    type: genreSchema,
    required: true,
  },
});

module.exports.moviesSchema = moviesSchema;
