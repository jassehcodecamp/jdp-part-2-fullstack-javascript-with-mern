var express = require("express")
var router = express.Router()

const users = [
  {
    name: "Mr. Sowe",
  },
  {
    name: "Tafsiru Loum",
  },
  {
    name: "Mamfatou Drammeh",
  },
]

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.render("users", { users: users })
  // res.send("respond with a resource")
})

module.exports = router
