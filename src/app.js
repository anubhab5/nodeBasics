const express = require("express");
const app = express();
const Joi = require("joi");
const home = require("./routes/home");
const genres = require("./routes/genres");
const customer = require("./routes/customer");
const { connectToDB } = require("./service/database-conn.svc");

app.use(express.json());

connectToDB();

app.use("/", home);
app.use("/api/genres/", genres);
app.use("/api/customer", customer);

app.listen(5000, () => console.log("Application listening on port 5000"));
