const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
const ContactSchema = require('../models/Contact');
const User = require('../models/User');

const Contact = mongoose.model("contacts", ContactSchema);


/* GET contacts listing. */
router.get("/", async function (req, res) {

  // const contacts = await Contact.find()
  const authUser = await User.findById(req.user.id);

  let contacts = [];

  if (authUser.role === 'admin') {
    contacts = (await User.find()).flatMap(user => user.contacts);
  } else {
    contacts = (await User.findById(req.user.id)).contacts
  }
  
  res.render("contacts/index", {
    contacts,
    contactCreated: req.flash("contact_created"),
    contactUpdated: req.flash("contact_updated"),
    confirmDelete: req.flash("confirm_delete"),
    contactId: req.flash("contact_id"),
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

  const user = await User.findById(req.user.id);

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
  if (user.contacts.find((contact) => contact.phone ===phone )) {
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
    const contact = new Contact({ name, email, phone, address, userId: req.user.id })
    user.contacts.push(contact);

    await user.save();

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
router.get("/:id/confirm-delete", async function (req, res) {
  const contact = await Contact.findById(req.params.id)

  req.flash(
    "confirm_delete",
    `Are you sure you want to delete the contact with name ${contact.name}`
  )
  req.flash("contact_id", contact.id)
  res.redirect("/contacts")
})

router.delete("/:id", async function (req, res) {
  await Contact.findByIdAndDelete(req.params.id)

  req.flash("contact_deleted", "The Contact has been deleted!")
  res.redirect("/contacts")
})

module.exports = router
