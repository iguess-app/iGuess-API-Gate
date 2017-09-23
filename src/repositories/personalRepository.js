'use Strict';

const Boom = require('boom');
const qs = require('querystring')

module.exports = (app) => {
  const requestManager = app.coincidents.Managers.requestManager;
  const apis = app.coincidents.Config.apis;

  const getProfile = (request, headers) => {
    const uri = `${apis.personalUrl}/profiles/getProfile?${_buildQueryString(request)}`

    return requestManager.get(uri, headers)
      .catch((err) => Boom.serverUnavailable(err));
  }

  const sendGuessLeagueNotifications = (request, headers) => {
    const uri = `${apis.guessUrl}/notifications/setGuessLeagueNotifications`

    return requestManager.put(uri, headers, request)
      .catch((err) => {
        throw err
      });
  }


  const singIn = (request) => {
    //requestManager.post(`${apis.personalUrl}/getteams`, null, request)
    //.catch((err) => Boom.serverUnavailable(err));
  }


  return {
    getProfile,
    singIn
  }
}

const _buildQueryString = (request) => {
  const keys = Object.keys(request)
  const value = Object.values(request)

  keys.forEach((key, index) => {
    
  })
  const qsBuilded = qs.stringify({
    userRef: request.userRef
  })
  
  return qsBuilded
}