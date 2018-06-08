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

const listGuessesLeagues = (request, headers) => {
  const uri = `${apis.guessUrl}/guessleague/listGuessesLeagues`
  return requestManager.get(uri, headers, request)
    .catch((err) => treatError(err))
}

const editGuessLeague = (request, headers) => {
  const uri = `${apis.guessUrl}/guessleague/editGuessLeague`
  return requestManager.patch(uri, headers, request)
    .catch((err) => treatError(err))
}

const quitGuessLeague = (request, headers) => {
  const uri = `${apis.guessUrl}/guessleague/quitGuessLeague`
  return requestManager.delete(uri, headers, request)
    .catch((err) => treatError(err))
}

const kickUserFromGuessLeague = (request, headers) => {
  const uri = `${apis.guessUrl}/guessleague/kickUserFromGuessLeague`
  return requestManager.delete(uri, headers, request)
    .catch((err) => treatError(err))
}

const putCaptain = (request, headers) => {
  const uri = `${apis.guessUrl}/guessleague/putCaptain`
  return requestManager.patch(uri, headers, request)
    .catch((err) => treatError(err))
}

const quitCaptain = (request, headers) => {
  const uri = `${apis.guessUrl}/guessleague/quitCaptain`
  return requestManager.delete(uri, headers, request)
    .catch((err) => treatError(err))
}

const addToGuessLeague = (request, headers) => {
  const uri = `${apis.guessUrl}/guessleague/addToGuessLeague`
  return requestManager.patch(uri, headers, request)
    .catch((err) => treatError(err))
}

module.exports = {
  createGuessLeague,
  getGuessLeague,
  inviteToGuessLeague,
  listGuessesLeagues,
  editGuessLeague,
  quitGuessLeague,
  kickUserFromGuessLeague,
  putCaptain,
  quitCaptain,
  addToGuessLeague
}