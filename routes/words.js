const express = require("express"),
  router = express.Router(),
  mongoose = require("mongoose");
const res = require("express/lib/response");
const dbo = require("../db");

async function getWords() {
  await dbo.connect();
  const trial = await dbo.findAll();
  // console.log(trial.name);
  return trial;
}
async function getOnlyWords() {
  await dbo.connect();
  const trial = await dbo.findAll();
  let result = trial.map((a) => a.name);
  return result;
}

async function chooseRandom() {
  const list = await getWords();
  return list[Math.floor(Math.random() * list.length)];
}
const c = {
  chooseRandom: chooseRandom,
  getWords: getWords,
  getOnlyWords: getOnlyWords /*list: list*/,
};

module.exports = c;
