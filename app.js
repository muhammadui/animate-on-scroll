const express = require("express");
const app = express();
const morgan = require("morgan");
app.use(morgan("tiny"));
// view engine - ejs
app.set("view engine", "ejs");

app.get("/test", (req, res) => {
  res.send("Everything is Working.");
});
app.get("/", (req, res) => {
  res.render("index");
});
app.listen(3003, () => {
  console.debug("App listening on port 3003");
});
