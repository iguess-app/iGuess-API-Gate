'use strict'

const coincidents = require('iguess-api-coincidents')
const requestManager = coincidents.Managers.requestManager
const apis = coincidents.Config.apis
const treatError = require('../treatError')

const addUserToGuessLine = (reqBody, headers) => {
  const uri = `${apis.guessUrl}/guessline/addUserToGuessLine`
  return requestManager.patch(uri, headers, reqBody)
    .catch((err) => treatError(err))
}

const setPredictions = (reqBody, headers) => {
  const uri = `${apis.guessUrl}/guessline/setPredictions`
  return requestManager.put(uri, headers, reqBody)
    .catch((err) => treatError(err))
}

const getGuessLine = (reqBody, headers) => {
  const uri = `${apis.guessUrl}/guessline/getGuessLine`
  return requestManager.get(uri, headers, reqBody)
    .catch((err) => treatError(err))
}

const listGuessesLines = (reqBody, headers) => {
  const uri = `${apis.guessUrl}/guessline/listGuessesLines`
  return requestManager.get(uri, headers, reqBody)
    .catch((err) => treatError(err))
}

const userAtGuessLine = (reqBody, headers) => {
  const uri = `${apis.guessUrl}/guessline/userAtGuessLine`
  return requestManager.get(uri, headers, reqBody)
    .catch((err) => treatError(err))
}

module.exports = {
  addUserToGuessLine,
  setPredictions,
  getGuessLine,
  listGuessesLines,
  userAtGuessLine
}