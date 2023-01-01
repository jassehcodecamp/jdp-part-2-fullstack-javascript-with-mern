var express = require("express")
var router = express.Router()
var passport = require("passport")
var LocalStrategy = require("passport-local")
// var crypto = require("crypto")
var md5 = require("md5")
const User = require('../models/User');

async function verify(email, password, cb) {
  console.log("coming here")
  const user = await User.findOne({ email: email })

  if (!user) {
    console.log("Invalid email")
    return cb(null, false, { message: "Incorrect email or password." })
  }

  console.log("Passing here")
  if (user.password !== md5(password)) {
    return cb(null, false, { message: "Incorrect email or password." })
  }
  console.log("authenticated successfully")
  return cb(null, user)
}


passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
    },
    verify
  )
)

passport.serializeUser(function (user, cb) {
  process.nextTick(function () {
    cb(null, { id: user.id, email: user.email })
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

router.post("/logout", function (req, res, next) {
  req.logout(function (err) {
    if (err) {
      return next(err)
    }
    res.redirect("/login")
  })
})



module.exports = router
