const mongoose = require("mongoose");
const { genreSchema } = require("../schema/genre.schema");

const Genre = mongoose.model("genre", genreSchema);

function saveGenre(genre) {
  let genreData = new Genre({
    name: genre.name,
    description: genre.description,
  });
  return genreData.save();
}

function getGenreList() {
  return Genre.find();
}

function getGenreById(id) {
  try {
    return Genre.findById(id);
  } catch (error) {
    console.log(error);
  }
}

async function getGenreByName(genreName) {
  return await Genre.find({ name: genreName });
}

async function updateGenre(id, genre) {
  const selectedGenre = await Genre.findById(id);
  selectedGenre.name = genre.name;
  selectedGenre.description = genre.description;
  return selectedGenre.save();
}

function deleteGenreById(id) {
  return Genre.findByIdAndRemove(id);
}

module.exports = {
  saveGenre: saveGenre,
  getGenreList: getGenreList,
  getGenreById: getGenreById,
  getGenreByName: getGenreByName,
  updateGenre: updateGenre,
  deleteGenreById: deleteGenreById,
};
