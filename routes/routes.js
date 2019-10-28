const express = require("express");
const router = express.Router();
const Post = require("../db/posts");
// const ObjectID = require("mongodb").ObjectID;

const path = require("path");

router.post("/postcomment", (req, res) => {
  console.log(req.body);

  // var ip =
  var ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;

  // console.log(req.headers["x-forwarded-for"]);
  // console.log(req.connection.remoteAddress);
  // console.log(req.ips);
  var newpost = new Post({
    firstName: req.body.name,
    postid: req.body.postid,
    content: req.body.content,
    date: new Date().toISOString(),
    up: ip
  });

  newpost
    .save()
    .then(result => {
      console.log(result);
      res.status(200).json({ err: "no", msg: "success" });
    })
    .catch(err => {
      res.status(500).json({ err: "yes", msg: "error occured" });
    });
});

router.get("/newreader", (req, res) => {
  console.log(req.body);
  res.status(200).json({ err: "no" });
});

module.exports = router;
