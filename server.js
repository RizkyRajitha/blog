const express = require("express");
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");
const bp = require("body-parser");

const port = process.env.PORT || 3001;

mongoose.Promise = global.Promise;

const mongodbAPI = process.env.mongourl;
const app = express();
app.use(cors());
app.use(require("morgan")("dev"));
app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());
app.set("trust proxy", true);
app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/api", require("./routes/routes"));

try {
  mongoose.connect(mongodbAPI, { useNewUrlParser: true }, err => {
    if (!err) console.log("connected to mongodb sucsessfully" + "👍");
  });
} catch (error) {
  console.log(err);
}

mongoose.set("debug", true);

app.listen(port, () => {
  console.log("listning on 3001");
});
