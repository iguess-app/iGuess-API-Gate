'use strict'

const coincidents = require('iguess-api-coincidents')
const requestManager = coincidents.Managers.requestManager
const apis = coincidents.Config.apis

const createGuessLeague = (reqBody, headers) => {
  const uri = `${apis.guessUrl}/guessleague/create`

  return requestManager.post(uri, headers, reqBody)
}

const getGuessLeague = (request, headers) => {
  const uri = `${apis.guessUrl}/guessleague/getGuessLeague`

  return requestManager.get(uri, headers, request)
}

module.exports = {
  createGuessLeague,
  getGuessLeague
}