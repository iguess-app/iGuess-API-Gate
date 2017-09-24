'use strict'

const coincidents = require('iguess-api-coincidents')
const requestManager = coincidents.Managers.requestManager
const apis = coincidents.Config.apis
const treatError = require('../treatError')

const getProfile = (request, headers) => {
  const uri = `${apis.personalUrl}/profiles/getProfile`

  return requestManager.get(uri, headers, request)
    .catch((err) => treatError(err))
}

const sendGuessLeagueNotifications = (request, headers) => {
  const uri = `${apis.personalUrl}/notifications/setGuessLeagueNotifications`

  return requestManager.put(uri, headers, request)
    .catch((err) => {
      throw err
    })
}

const areFriends = (request, headers) => {
  const uri = `${apis.personalUrl}/friends/areFriends`

  return requestManager.get(uri, headers, request)
    .catch((err) => {
      throw treatError(err)
    })
}

module.exports = {
  getProfile,
  sendGuessLeagueNotifications,
  areFriends
}