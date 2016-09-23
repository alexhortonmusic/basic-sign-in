'use strict';

const { Router } = require('express')

const { index } = require('../ctrl/root')

const router = Router()

router.get('/', index)

module.exports = router
