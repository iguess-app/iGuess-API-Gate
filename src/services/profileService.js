'use strict'

const personalRepository = require('../repositories').personalRepository

const getProfile = (reqBody, headers) => personalRepository.getProfile(reqBody, headers)

module.exports = {
  getProfile
}