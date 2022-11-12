var express = require("express")
var router = express.Router()

const contacts = []

/* GET contacts listing. */
router.get("/", function (req, res) {
  res.render("contacts/index")
})

/* GET create contact. */
router.get("/create", function (req, res) {
  res.render("contacts/create")
})

module.exports = router
