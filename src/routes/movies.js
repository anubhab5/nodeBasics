const express = require("express");
const router = express.Router();
const {
  saveMovie,
  getMovies,
  getMovieById,
  deleteMovie,
} = require("../service/movie.svc");

router.get("/", async (req, res) => {
  const result = await getMovies();
  res.send(result);
});

router.get("/:id", async (req, res) => {
  const result = await getMovieById(req.params.id);
  res.send(result);
});

router.post("/", async (req, res) => {
  const movieObj = {
    title: req.body.title,
    numberInStock: req.body.numberInStock,
    dailyRentalRate: req.body.dailyRentalRate,
    genreId: req.body.genreId,
  };
  const savedMovie = await saveMovie(movieObj);
  res.send(savedMovie);
});

router.put("/:id", (req, res) => {});

router.delete("/:id", async (req, res) => {
  const result = await deleteMovie(req.params.id);
  res.send(result);
});

module.exports = router;
