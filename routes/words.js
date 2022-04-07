const express = require("express"),
  router = express.Router(),
  mongoose = require("mongoose");

const list = ["mmmmmm", "sssssrld", "aaaa", "qqqq", "uuuuu"];

function chooseRandom() {
  return list[Math.floor(Math.random() * list.length)];
}
function trial() {
  console.log("HE:RERE");
}
const c = { chooseRandom: chooseRandom };

module.exports = c;
