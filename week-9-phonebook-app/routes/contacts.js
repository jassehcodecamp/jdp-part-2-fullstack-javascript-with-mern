var express = require("express")
var router = express.Router()

const contacts = [
  {
    name: "Omar Jasseh",
    phone: "3100948",
    email: "omar@jassehcodecamp.com",
    address: "Bakoteh, Sanchaba",
  },
  {
    name: "Buba Conteh",
    phone: "3010451",
    email: "buba@jassehcodecamp.com",
    address: "Bundung",
  },
]

/* GET contacts listing. */
router.get("/", function (req, res) {
  res.render("contacts/index", {
    contacts: contacts,
  })
})

/* GET create contact. */
router.get("/create", function (req, res) {
  res.render("contacts/create")
})

/* POST save contact. */
router.post("/", function (req, res) {
  // const name = req.body.name
  // const email = req.body.email
  // const phone = req.body.phone
  // const address = req.body.address

  const { name, email, phone, address } = req.body
  contacts.push({ name, email, phone, address })

  // console.log("contacts", contacts)

  // add flash message
  res.redirect("/contacts")
})

module.exports = router
