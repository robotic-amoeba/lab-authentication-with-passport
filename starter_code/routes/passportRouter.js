const express        = require("express");
const router         = express.Router();
// User model
const User           = require("../models/user");
// Bcrypt to encrypt passwords
const bcrypt         = require("bcrypt");
const bcryptSalt     = 10;
const ensureLogin = require("connect-ensure-login");
const passport      = require("passport");



router.get("/private-page", ensureLogin.ensureLoggedIn(), (req, res) => {
  res.render("passport/private", { user: req.user });
});

router.get("/signup", (req, res, next) => {
  res.render("./passport/signup")
})

router.post("/signup", (req, res, next) => {
  let username = req.params.username;
  let password = req.params.password;
  {username, password }
})

router.get("/login", (req, res, next) => {
  res.render("./passport/login")
})

router.post("/login", (req, res, next) => {

})

module.exports = router;
