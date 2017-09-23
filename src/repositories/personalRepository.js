'use Strict';

const Boom = require('boom');
const qs = require('querystring')

module.exports = (app) => {
  const requestManager = app.coincidents.Managers.requestManager;
  const apis = app.coincidents.Config.apis;

  const getProfile = (request, headers) => {
    const uri = `${apis.personalUrl}/profiles/getProfile?${_buildQueryString(request)}`

    return requestManager.get(uri, headers)
      .catch((err) => 
        Boom.serverUnavailable(err.error.message)
      )
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
  const values = Object.values(request)

  const qsBuilded = keys.reduce((acumulator, key, index) => {
    const qsObj = {}
    qsObj[key] = values[index]
    const partialQS = qs.stringify(qsObj)
     
    if (acumulator.length) {
      return `${acumulator}&${partialQS}` 
    }

    return partialQS
  }, '')
  
  
  return qsBuilded
}