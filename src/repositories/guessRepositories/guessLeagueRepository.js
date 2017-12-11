'use strict'

const coincidents = require('iguess-api-coincidents')
const requestManager = coincidents.Managers.requestManager
const apis = coincidents.Config.apis
const treatError = require('../treatError')

const createGuessLeague = (reqBody, headers) => {
  const uri = `${apis.guessUrl}/guessleague/createGuessLeague`

  return requestManager.post(uri, headers, reqBody)
    .catch((err) => treatError(err))
}

const getGuessLeague = (request, headers) => {
  const uri = `${apis.guessUrl}/guessleague/getGuessLeague`

  return requestManager.get(uri, headers, request)
  .catch((err) => treatError(err))
}

const inviteToGuessLeague = (request, headers) => {
  const uri = `${apis.guessUrl}/guessleague/inviteToGuessLeague`

  return requestManager.patch(uri, headers, request)
    .catch((err) => treatError(err))
}

module.exports = {
  createGuessLeague,
  getGuessLeague,
  inviteToGuessLeague
}