'use strict';

const { Router } = require('express')

const router = Router()

const login = require('./login')
const register = require('./register')
const root = require('./root')

// const { index, destroy } = require('../ctrl/logout')

router.use(root)
router.use(login)
router.use(register)

router.get('/logout', (req, res) => {
  if (req.session.email) {
    res.render('logout', { page: 'Logout'})
  } else {
    res.redirect('/login')
  }
})

// guard middleware
router.use((req, res, next) => {
  if (req.session) {
    next()
  } else {
    res.redirect('/login')
  }
})

router.post('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) throw err
    res.redirect('/login')
  })
})

module.exports = router
