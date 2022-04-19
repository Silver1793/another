const express = require("express"),
  router = express.Router(),
  mongoose = require("mongoose");

const list = ["video", "games", "trial", "test", "something", "words"];

function chooseRandom() {
  return list[Math.floor(Math.random() * list.length)];
}
const c = { chooseRandom: chooseRandom, list: list };

module.exports = c;
