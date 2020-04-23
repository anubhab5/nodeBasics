const express = require("express");
const router = express.Router();
const {
  getGenreList,
  getGenreById,
  getGenreByName,
  saveGenre,
  updateGenre,
  deleteGenreById,
} = require("../service/genre.svc");

// Getting all list of genres
router.get("/", async (req, res) => {
  const result = await getGenreList();
  res.send(result);
});

// Getting particular genre on the basis of id
router.get("/:id", async (req, res) => {
  const genre = await getGenreById(req.params.id);
  if (!genre) return res.status(404).send("The genre was not found.");
  res.send(genre);
});

// create a new record
router.post("/", async (req, res) => {
  const genre = {
    name: req.body.name,
    description: req.body.description,
  };
  let result = await saveGenre(genre);
  res.status(200).send(result);
});

router.put("/:id", async (req, res) => {
  const genreId = req.params.id;
  const genre = {
    name: req.body.name,
    description: req.body.description,
  };
  let result = await updateGenre(genreId, genre);
  res.send(result);
});

router.delete("/:id", async (req, res) => {
  let deletedGenre = await deleteGenreById(id);
  res.status(201).send(deletedGenre);
});

module.exports = router;
