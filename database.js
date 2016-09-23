'use strict';

const mongoose = require('mongoose')

const MONGO_DB_URL = process.env.MONGODB_URL || 'mongodb://localhost:27017/signInApp'

mongoose.Promise = Promise

module.exports.connect = () => mongoose.connect(MONGO_DB_URL)
module.exports.disconnect = () => mongoose.disconnect()
