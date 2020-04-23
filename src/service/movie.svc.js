const mongoose = require("mongoose");
const { moviesSchema } = require("../schema/movie.schema");
const { getGenreById } = require("../service/genre.svc");

const Movie = mongoose.model("movie", moviesSchema);

async function getMovies() {
  return await Movie.find();
}

async function getMovieById(movieId) {
  return await Movie.findById(movieId);
}

async function saveMovie(movieObj) {
  const genre = await getGenreById(movieObj.genreId);
  if (!genre) {
    return resizeBy.status(400).send("Genre Not Found");
  }

  const movie = new Movie({
    title: movieObj.title,
    numberInStock: movieObj.numberInStock,
    dailyRentalRate: movieObj.dailyRentalRate,
    genre: {
      _id: genre._id,
      name: genre.name,
    },
  });
  return await movie.save();
}

function updateMovie(movieId) {}

async function deleteMovie(movieId) {
  return await Movie.findOneAndRemove({ _id: movieId });
}

module.exports = {
  saveMovie: saveMovie,
  getMovies: getMovies,
  getMovieById: getMovieById,
  deleteMovie: deleteMovie,
};
