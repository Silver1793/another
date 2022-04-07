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

app.use(cors());
app.use(express.json());

//app.use("/hangman", home);
// app.use("/hangman/words", words);
// app.use("/hangman/play", play);
// app.use("/hangman/signup", signup);
app.get("/trial", (req, res) => res.send("hello world"));
app.get("/words", (req, res) => res.send(c.chooseRandom()));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("./src/build"));
}

app.listen({ port }, () => {
  console.log(`Server is running on ${port}`);
});
