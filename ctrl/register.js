'use strict';

const bcrypt = require('bcrypt')

const User = require('../models/user')

module.exports.new = (req, res) => {
  res.render('register')
}

module.exports.create = ({ session, body: { email, password }}, res, err) => {
  console.log(session)
  User.findOne({ email })
    .then(user => {
      if (user) {
        res.render('register', { msg: 'User already exists'})
      } else {
        return new Promise((resolve, reject) => {
          bcrypt.hash(password, 13, (err, hash) => {
            if (err) {
              reject(err)
            } else {
              resolve(hash)
            }
          })
        })
      }
    })
    .then(hash => User.create({ email, password: hash }))
    .then(() => res.redirect('login'))
    .catch(err)
}
