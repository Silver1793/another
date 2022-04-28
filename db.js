const mongoose = require("mongoose");
const { MongoClient, ObjectId } = require("mongodb");

// const ATLAS_URI =
//   "mongodb+srv://aitfinal:aitfinal@cluster0.yuuyg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(ATLAS_URI);
// async function main() {
//   client
//     .connect()
//     .then(() => {
//       console.log("Connected");
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }

// main();

// const User = new mongoose.Schema({
//   // username, password
//   username: { type: String, required: true },
//   password: { type: String, required: true },
//   lists: [{ type: mongoose.Schema.Types.ObjectId, ref: "List" }],
// });

// const Word = new mongoose.Schema({
//   name: { type: String, required: true },
//   length: { type: Number, min: 1, required: true },
// });

// const List = new mongoose.Schema({
//   user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
//   name: { type: String, required: true },
//   createdAt: { type: Date, required: true },
//   words: [Word],
// });

// mongoose.model("User", User);
// mongoose.model("List", List);
// mongoose.model("Item", Word);
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/grocerydb");

// const { MongoClient } = require("mongodb");
const Db =
  "mongodb+srv://aitfinal:aitfinal@cluster0.yuuyg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function connect() {
  try {
    await client.connect();
    // console.log("success");
  } catch (err) {
    console.log(err);
  }
}
async function findScore() {
  const list = client.db("trial").collection("score").find({});
  const res = await list.toArray();
  // console.log(res);
  return res;
}
async function updateScore(update) {
  const res = client
    .db("trial")
    .collection("score")
    .updateOne(
      { _id: ObjectId("626a0b3fbaa95dd529503fef") },
      { $set: { score: update } }
    );
}
async function listAll() {
  const list = await client.db().admin().listDatabases();
}
async function updateList(word) {
  client
    .db("trial")
    .collection("words")
    .insertOne({ name: word, length: word.length });
}
async function findAll() {
  const list = client.db("trial").collection("words").find({});
  const res = await list.toArray();
  return res;
}

module.exports = {
  connect: connect,
  listAll: listAll,
  client: client,
  findAll: findAll,
  updateList: updateList,
  findScore: findScore,
  updateScore: updateScore,
};
