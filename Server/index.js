const express = require("express");
const morgan = require("morgan");
const app = express();
const { mongoose } = require("./database");

app.set("port", process.env.PORT || 4000);

app.use(morgan("dev"));
app.use(express.json());

app.use("/api/tasks", require("./routes/task.routes"));

app.listen(app.get("port"), () => {
  console.log("Server funcionando correctamente...");
});
