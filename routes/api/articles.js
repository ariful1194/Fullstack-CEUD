const express = require("express");
const router = express.Router();

//Load Article Model
const Article = require("../../models/Article");

//@route Post api/articles]
//@desc Create Article
//@access Public
router.post("/", (req, res) => {
  const newArticle = new Article({
    title: req.body.title,
    body: req.body.body
  });
  newArticle
    .save()
    .then(article => {
      return res.status(201).json(article);
    })
    .catch(err => {
      if (err) return res.status(422).json(err);
    });
});

module.exports = router;
