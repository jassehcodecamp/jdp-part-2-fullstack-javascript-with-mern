var express = require("express")
var router = express.Router()

/* GET home page. */
router.get("/", function (req, res, next) {
  console.log('Home page')
  // next();
  res.render("index", {
    title: "JDP Phonebook App With Express",
    info: req.flash("info"),
  })
})


module.exports = router