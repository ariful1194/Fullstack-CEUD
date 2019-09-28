const express = require("express");
const router = express.Router();

//Load Article Model
const Article = require("../../models/Article");

//@route Post api/articles
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

//@route Get api/articles
//@desc Create Article
//@access Public

router.get("/", (req, res) => {
  Article.find()
    .sort({ date: -1 })
    .then(articles => {
      if (articles) {
        return res.status(200).json(articles);
      } else {
        return res.status(503).json({ NoArticleFound: "No Article Available" });
      }
    })
    .catch(err => {
      if (err) return res.status(400).json(err);
    });
});

//@route delete api/articles/:id
//@desc Delete an Article
//@access Public

router.delete("/:id", (req, res) => {
  Article.findById(req.params.id)
    .then(article => {
      article
        .remove()
        .then(() => {
          return res
            .status(200)
            .json({ Success: "Article Deleted Successfully" });
        })
        .catch();
    })
    .catch(err => {
      return res.status(404).json({ NoArticleFound: "No Article Found" });
    });
});

//@route Put api/articles/:id
//@desc Update an Article
//@access Public

router.put("/:id", (req, res) => {
  Article.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
    .then(article => {
      return res.status(200).json(article);
    })
    .catch(err => {
      return res.status(404).json({ NoArticleFound: "No Article Found" });
    });
});

module.exports = router;
