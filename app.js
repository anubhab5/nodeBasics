const express = require("express");
const app = express();

app.use(express.json());

let genreList = [
  {
    id: 1,
    name: "Comedy",
  },
  {
    id: 2,
    name: "Action",
  },
  {
    id: 3,
    name: "Romance",
  },
  {
    id: 4,
    name: "Horror",
  },
];

app.get("/", (req, res) => {
  res.send("Welcome to my API...");
});

// Getting all list of genres
app.get("/api/genres", (req, res) => {
  res.send(genreList);
});

// Getting particular genre on the basis of id
app.get("/api/genres/:id", (req, res) => {
  const genre = genreList.find((g) => g.id === parseInt(req.params.id));
  if (!genre) return res.status(404).send("The genre was not found.");
  res.send(genre);
});

// create a new record
app.post("/api/genres", (req, res) => {
  const genre = {
    id: genreList.length + 1,
    name: req.body.name,
  };
  genreList.push(genre);
  res.send(genre);
});

app.put("/api/genres/:id", (req, res) => {
    const genre = genreList.find((c) => c.id === parseInt(req.params.id));
    if (!genre) res.status(404).send("Genre Not Found.");
    genre.name = req.body.name;
    res.send(genre);
});

app.delete("/api/genres/:id", (req, res)=>{
    const genre = genreList.find((c) => c.id === parseInt(req.params.id));
    if (!genre) res.status(404).send("Genre Not Found.");  
    let index = genreList.findIndex(
      (genre) => genre.id === parseInt(req.params.id)
    );  
    genreList.splice(index, 1);
    res.send(genre);
});

app.listen(5000, () => console.log("Application listening on port 5000"));
