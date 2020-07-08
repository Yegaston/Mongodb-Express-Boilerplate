const express = require("express");
const { checkTokenAndGetUser } = require("../App/Middlewares/auth-middleware");
const router = express.Router();

router.get("/welcome", (req, res) => {
  res.status(200).json({ Welcome: "Welcome to email service" });
});

router.get("/protected-example", checkTokenAndGetUser, (req, res) => {
  res.status(200).json({ Welcome: "Welcome to email service" });
});

module.exports = router;
