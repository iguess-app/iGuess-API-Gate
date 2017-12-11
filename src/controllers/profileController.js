'use strict'

const personalRepository = require('../repositories').personalRepository

const getProfile = (request, reply) => {
  const query = request.query
  const headers = request.headers

  personalRepository.getProfile(query, headers)
    .then((profile) => reply(profile))
    .catch((err) => reply(err))
}

const signIn = (request, reply) => {
  const payload = request.payload
  const headers = request.headers

  personalRepository.signIn(payload, headers)
    .then((teams) => reply(teams))
    .catch((err) => reply(err))
}

const signUp = (request, reply) => {
  const payload = request.payload
  const headers = request.headers

  personalRepository.signUp(payload, headers)
    .then((teams) => reply(teams))
    .catch((err) => reply(err))
}

const emailAvailability = (request, reply) => {
  const payload = request.query
  const headers = request.headers

  personalRepository.emailAvailability(payload, headers)
    .then((teams) => reply(teams))
    .catch((err) => reply(err))
}

const userNameAvailability = (request, reply) => {
  const payload = request.query
  const headers = request.headers

  personalRepository.userNameAvailability(payload, headers)
    .then((teams) => reply(teams))
    .catch((err) => reply(err))
}

module.exports = {
  getProfile,
  signIn,
  signUp,
  emailAvailability,
  userNameAvailability
}