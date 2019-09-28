const express = require("express");
const mongoose = require("mongoose");

const app = express();

//DB url
const db = require("./config/keys").mongoURI;
//connect to db
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected!"))
  .catch(err => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("hello World");
});
const port = process.env.port || 9000;
app.listen(port, () => {
  console.log("server is starting at port " + port);
});
