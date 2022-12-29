var express = require("express")
var router = express.Router()
var passport = require("passport")
var LocalStrategy = require("passport-local")
// var crypto = require("crypto")
var md5 = require("md5")
const User = require('../models/User');

passport.use(
  new LocalStrategy(async function verify(username, password, cb) {
    console.log('coming here')
    const user = await User.findOne({ email: username });

    if (!user) {
      console.log("Invalid email")
      return cb(null, false, { message: "Incorrect username or password." });
    }

    console.log("Passing here")
    if (user.password !== md5(password)) {
      return cb(null, false, { message: "Incorrect username or password." })
    }
    console.log('authenticated successfully');
    return cb(null, user);
    
  })
)

passport.serializeUser(function (user, cb) {
  process.nextTick(function () {
    cb(null, { id: user.id, username: user.email })
  })
})

passport.deserializeUser(function (user, cb) {
  process.nextTick(function () {
    return cb(null, user)
  })
})
/* GET Sign In page. */
router.get("/login", function (req, res, next) {
  console.log('Login')
  res.render("login", {
    
  })
})

router.post("/login", passport.authenticate("local", {
    successRedirect: "/contacts",
    failureRedirect: "/login",
    failureMessage: true,
})
)


module.exports = router
