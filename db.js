const mongoose = require("mongoose");

const User = new mongoose.Schema({
  // username, password
  username: { type: String, required: true },
  password: { type: String, required: true },
  lists: [{ type: mongoose.Schema.Types.ObjectId, ref: "List" }],
});

const Word = new mongoose.Schema({
  name: { type: String, required: true },
  length: { type: Number, min: 1, required: true },
});

const List = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  name: { type: String, required: true },
  createdAt: { type: Date, required: true },
  words: [Word],
});

mongoose.model("User", User);
mongoose.model("List", List);
mongoose.model("Item", Word);
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/grocerydb");
