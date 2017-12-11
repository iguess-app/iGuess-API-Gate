'use strict'

const coincidents = require('iguess-api-coincidents')
const requestManager = coincidents.Managers.requestManager
const apis = coincidents.Config.apis
const treatError = require('../treatError')

const getProfile = (request, headers) => {
  const uri = `${apis.personalUrl}/profiles/getProfile`
  return requestManager.get(uri, headers, request)
    .catch((err) => treatError(err, false))
}

const signIn = (request, headers) => {
  const uri = `${apis.personalUrl}/login/signin`
  return requestManager.post(uri, headers, request)
    .catch((err) => treatError(err))
}

const signUp = (request, headers) => {
  const uri = `${apis.personalUrl}/login/signup`
  return requestManager.post(uri, headers, request)
    .catch((err) => treatError(err))
}

const emailAvailability = (request, headers) => {
  const uri = `${apis.personalUrl}/availability/email`
  return requestManager.get(uri, headers, request)
    .catch((err) => treatError(err))
}

const userNameAvailability = (request, headers) => {
  const uri = `${apis.personalUrl}/availability/userName`
  return requestManager.get(uri, headers, request)
    .catch((err) => treatError(err))
}

const setGuessLeagueNotifications = (request, headers) => {
  const uri = `${apis.personalUrl}/notifications/setGuessLeagueNotifications`
  return requestManager.put(uri, headers, request)
    .catch((err) => treatError(err))
}

const areFriends = (request, headers) => {
  const uri = `${apis.personalUrl}/friends/areFriends`
  return requestManager.get(uri, headers, request)
    .catch((err) => treatError(err))
}

module.exports = {
  signIn,
  signUp,
  emailAvailability,
  userNameAvailability,
  getProfile,
  setGuessLeagueNotifications,
  areFriends
}