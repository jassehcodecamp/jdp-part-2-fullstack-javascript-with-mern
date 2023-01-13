const mustBeAuthenitcated = function (req, res, next) {
  console.log('is authenticated', req.isAuthenticated())
  if (!req.isAuthenticated()) {
    return res.redirect('/login');
  }

  next();
}

module.exports = mustBeAuthenitcated