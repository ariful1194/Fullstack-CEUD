const express = require("express");

const app = express();
app.get("/", (req, res) => {
  res.send("hello World");
});
const port = process.env.port || 9000;
app.listen(port, () => {
  console.log("server is starting at port " + port);
});
