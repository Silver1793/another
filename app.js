const express = require("express");
const router = require("express").Router();
const cors = require("cors");
const dbo = require("./db");

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
const { client } = require("./db");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

// dbo.connect();
// dbo.listAll();

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

//app.use("/hangman", home);
// app.use("/hangman/words", words);
// app.use("/hangman/play", play);
// app.use("/hangman/signup", signup);
app.get("/score", async (req, res) => {
  await dbo.connect();
  res.send(await dbo.findScore());
});
app.post("/score", async (req, res) => {
  // console.log(Object.keys(req.body)[0]);
  dbo.updateScore(Object.keys(req.body)[0]);
  res.send("Recieved");
});
app.get("/dictionary", async (req, res) => {
  res.send(/*c.list*/ await c.getOnlyWords());
});
app.get("/words", async (req, res) => res.send(await c.chooseRandom()));
app.post("/add", (req, res) => {
  dbo.updateList(Object.keys(req.body)[0]);
  res.send("Recieved");
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("./src/build"));
}

app.listen({ port }, () => {
  console.log(`Server is running on ${port}`);
});
