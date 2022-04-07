const express = require("express"),
  router = express.Router(),
  mongoose = require("mongoose");

const list = ["music", "teleport", "water", "reading", "books"];

function chooseRandom() {
  return list[Math.floor(Math.random() * list.length)];
}

const c = { chooseRandom: chooseRandom };

module.exports = c;
