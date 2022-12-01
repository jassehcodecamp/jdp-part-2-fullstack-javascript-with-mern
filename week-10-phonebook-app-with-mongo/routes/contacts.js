var express = require("express")
var router = express.Router()
const { v4: uuid } = require("uuid")
const mongoose = require("mongoose")

const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    unique: true,
  },
  email: {
    type: String,
  },
  address: {
    type: String,
    required: false,
    default: null,
  },

  createAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
})

const Contact = mongoose.model("contacts", ContactSchema)

/* GET contacts listing. */
router.get("/", async function (req, res) {
  const contacts = await Contact.find()
  res.render("contacts/index", {
    contacts,
    contactCreated: req.flash("contact_created"),
    contactUpdated: req.flash("contact_updated"),
    contactDeleted: req.flash("contact_deleted"),
  })
})

/* GET contact */
router.get("/:id/edit", async function (req, res) {
  const id = req.params.id

  const contact = await Contact.findById(id)
  res.render("contacts/edit", {
    contact,
  })
})

/* GET create contact. */
router.get("/create", function (req, res) {
  res.render("contacts/create", {
    ...req.flash("errors")[0],
  })
})

/* POST: save contact. */
router.post("/", async function (req, res) {
  const errors = {}

  const { name, email, phone, address } = req.body

  // form validation starts here
  if (!name.trim()) {
    errors.name = "The name is required"
  }

  if (!phone.trim()) {
    errors.phone = "The phone is required"
  }

  if (!email.trim()) {
    errors.email = "The email is required"
  }

  if (!address.trim()) {
    errors.address = "The address is required"
  }

  // check if phone exist
  // if ((await Contact.find({ phone: phone })).length) {
  if (await Contact.findOne({ phone: phone })) {
    errors.phone = "The phone already exist"
  }

  const hasErrors = Boolean(Object.values(errors).length)

  if (hasErrors) {
    req.flash("errors", {
      hasErrors,
      errors,
      old: { name, email, phone, address },
    })

    res.redirect("/contacts/create")
  } else {
    const contact = new Contact({ name, email, phone, address })
    await contact.save()

    req.flash("contact_created", "The Contact has been successfully saved!")
    res.redirect("/contacts")
  }
})

/* Update: save contact */
router.patch("/:id", async function (req, res) {
  const id = req.params.id

  const formData = req.body

  await Contact.updateOne(
    { _id: id },
    {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      address: formData.address,
    }
  )

  req.flash("contact_updated", "The Contact has been successfully saved!")
  res.redirect("/contacts")
})

/* Delete: delete contact */
router.delete("/:id", async function (req, res) {
  await Contact.findByIdAndDelete(req.params.id)

  req.flash("contact_deleted", "The Contact has been deleted!")
  res.redirect("/contacts")
})

module.exports = router
