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
  const uri = `${apis.guessUrl}/notifications/setGuessLeagueNotifications`

  return requestManager.put(uri, headers, request)
    .catch((err) => {
      throw err
    })
}


const singIn = (request) => {
  //requestManager.post(`${apis.personalUrl}/getteams`, null, request)
  //.catch((err) => Boom.serverUnavailable(err));
}

module.exports = {
  getProfile,
  singIn,
  sendGuessLeagueNotifications
}