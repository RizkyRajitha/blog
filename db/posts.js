const mongoose = require("mongoose");
const ObjectID = require("mongodb").ObjectID;

var Schema = mongoose.Schema;

var postSchema = new Schema({
  firstName: {
    type: String
  },
  content: {
    type: String
  },
  date: {
    type: String
  },
  up: {
    type: String
  }
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
