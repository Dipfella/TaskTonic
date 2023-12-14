const mongoose = require("mongoose");
const URI = "mongodb://127.0.0.1/TaskTonic";

mongoose
  .connect(URI)
  .then((db) => console.log("Data Base Conectada"))
  .catch((err) => console.error(err));

module.exports = mongoose;
