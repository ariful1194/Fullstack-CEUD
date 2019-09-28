const express = require("express");
const mongoose = require("mongoose");

//articel routes
const articles = require("./routes/api/articles");

const app = express();

//body parser
const bodyParser = require("body-parser");
// use bodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//DB url
const db = require("./config/keys").mongoURI;
//connect to db
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected!"))
  .catch(err => {
    console.log(err);
  });

//use routes
app.use("/api/aritcles", articles);

app.get("/", (req, res) => {
  res.send("hello World");
});
//port
const port = process.env.port || 9000;
app.listen(port, () => {
  console.log("server is starting at port " + port);
});
