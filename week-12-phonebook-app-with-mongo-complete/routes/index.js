var express = require("express")
const mustBeGuest = require('../middlewares/guest')
var router = express.Router()

/* GET home page. */
router.get("/", mustBeGuest, function (req, res, next) {
  console.log('Home page')
  // next();
  res.render("index", {
    title: "JDP Phonebook App With Express",
    info: req.flash("info"),
  })
})


module.exports = router