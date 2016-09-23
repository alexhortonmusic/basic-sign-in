'use strict';

module.exports.index = (res, req) => {
  if (req.session.email) {
    res.render('/logout', { page: 'Logout'})
  } else {
    res.redirect('/login')
  }
}

module.exports.destroy = (req, res) => {
  req.session.destroy(err => {
    if (err) throw err
    res.redirect('/login')
  })
}
