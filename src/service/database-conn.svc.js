const mongoose = require("mongoose");

function connectToDB() {
  mongoose
    .connect("mongodb://localhost/vidly-rental-app", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to Vidly Database"))
    .catch((err) => console.log("Error " + err));
}
exports.connectToDB = connectToDB;
