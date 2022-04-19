const express = require("express");
const router = require("express").Router();
const cors = require("cors");

const home = require("./routes/home");
const signup = require("./routes/signup");
const words = require("./routes/words");
const play = require("./routes/play");
const trial = require("./routes/play");
const c = require("./routes/words.js");

// const chooseRandom = require("./routes/words.js");

const app = express();
const port = process.env.PORT || 6001;

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

//app.use("/hangman", home);
// app.use("/hangman/words", words);
// app.use("/hangman/play", play);
// app.use("/hangman/signup", signup);
app.get("/dictionary", (req, res) => res.send(c.list));
app.get("/words", (req, res) => res.send(c.chooseRandom()));
app.post("/add", (req, res) => {
  console.log("HERE");
  console.log(Object.keys(req.body));
  c.list.push(Object.keys(req.body)[0]);
  console.log(c.list);
  res.send("Recieved");
  // res.redirect("/dictionary");
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("./src/build"));
}

app.listen({ port }, () => {
  console.log(`Server is running on ${port}`);
});
