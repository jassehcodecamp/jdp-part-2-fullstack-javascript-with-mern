const mustBeGuest = function (req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect("/contacts")
  }

  next()
}

module.exports = mustBeGuest
