var express = require("express")
var router = express.Router()
const { v4: uuid } = require("uuid")
const { route } = require("../app")

const contacts = [
  {
    id: uuid(),
    name: "Omar Jasseh",
    phone: "3100948",
    email: "omar@jassehcodecamp.com",
    address: "Bakoteh, Sanchaba",
  },
  {
    id: uuid(),
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

/* GET contact */
router.get("/:id/edit", function (req, res) {
  const id = req.params.id

  const contact = contacts.find((contact) => contact.id === id)

  res.render("contacts/edit", {
    contact,
  })
})

/* GET create contact. */
router.get("/create", function (req, res) {
  res.render("contacts/create")
})

/* POST: save contact. */
router.post("/", function (req, res) {
  const { name, email, phone, address } = req.body
  contacts.push({ id: uuid(), name, email, phone, address })

  // console.log("contacts", contacts)

  // add flash message
  res.redirect("/contacts")
})

/* Update: save contact */
router.patch("/:id", function (req, res) {
  const id = req.params.id

  const formData = req.body

  const contact = contacts.find((contact) => contact.id === id)
  const contactIndex = contacts.indexOf(contact)

  contact.name = formData.name
  contact.phone = formData.phone
  contact.email = formData.email
  contact.address = formData.address

  contacts[contactIndex] = contact

  res.redirect("/contacts")
})

/* Delete: delete contact */
router.delete("/:id", function (req, res) {
  const contactIndex = contacts.findIndex(
    (contact) => contact.id === req.params.id
  )

  contacts.splice(contactIndex, 1)

  res.redirect("/contacts")
})

module.exports = router
