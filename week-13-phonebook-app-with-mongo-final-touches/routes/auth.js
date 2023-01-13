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
  console.log(user)
  process.nextTick(function () {
    cb(null, { id: user.id, email: user.email, name: user.name })
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


router.get("/register", function (req, res, next) {
  /* 
  {
      hasErrors,
      errors,
      old: { name, email, password, confirmPassword },
    }
  */
  const flashErrors = req.flash("errors")[0];

  res.render("register.hbs", {...flashErrors })
})

router.post("/register", async function (req, res, next) {
   const errors = {}

  const { name, email, password, confirmPassword } = req.body

  // form validation starts here
  if (!name) {
    errors.name = "The name is required"
  }

  if (!email) {
    errors.email = "The email is required"
  }

  if (!password) {
    errors.password = "The password is required"
  }

  if (!confirmPassword) {
    errors.confirmPassword = "The confirm password is required"
  }

  if (password !== confirmPassword) {
    errors.confirmPassword = "The passwords do not match";
  }

  // check if email exist
  if (await User.findOne({ email: email })) {
    errors.email = "The email already exist"
  }

  const hasErrors = Boolean(Object.values(errors).length)

  if (hasErrors) {
    req.flash("errors", {
      hasErrors,
      errors,
      old: { name, email, password, confirmPassword },
    })

    res.redirect("/register")
  } else {
    const user = new User({ name, email, password: md5(password) })
    await user.save()

    req.flash("user_created", "Your account has been successfully created!")
    res.redirect("/login")
  }
})





module.exports = router
