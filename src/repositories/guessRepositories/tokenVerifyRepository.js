'use strict'

const coincidents = require('iguess-api-coincidents')
const requestManager = coincidents.Managers.requestManager
const apis = coincidents.Config.apis
const treatError = require('../treatError')

const tokenVerify = (request, headers) => {
  const uri = `${apis.guessUrl}/token/verify`
  return requestManager.get(uri, headers, request)
    .catch((err) => treatError(err, false))
}

module.exports = {
  tokenVerify
}