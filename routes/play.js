const express = require("express"),
  router = express.Router(),
  mongoose = require("mongoose");

// router.use(isAuthenticated);

router.get("/", (req, res) => {
  res.send("<div>Play Screen</div>");
});

module.exports = router;
