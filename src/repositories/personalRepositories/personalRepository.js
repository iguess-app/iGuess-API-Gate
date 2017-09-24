'use strict'

const Boom = require('boom');

const coincidents = require('iguess-api-coincidents')
const requestManager = coincidents.Managers.requestManager
const log = coincidents.Managers.logManager
const apis = coincidents.Config.apis

const getProfile = (request, headers) => {
  const uri = `${apis.personalUrl}/profiles/getProfile`

  return requestManager.get(uri, headers, request)
    .catch((err) => _treatError(err))
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

const _treatError = (err) => {
  log.error(err)
  if (err.error.code === 'ECONNREFUSED') {
    return Boom.serverUnavailable(err.error.message)
  }

  return err
}

module.exports = {
  getProfile,
  singIn,
  sendGuessLeagueNotifications
}