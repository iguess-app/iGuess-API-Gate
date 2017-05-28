'use Strict';

const Boom = require('boom');
const qs = require('querystring')

module.exports = (app) => {
  const requestManager = app.coincidents.Managers.requestManager;
  const apis = app.coincidents.Config.apis;

  const getTeams = (reqBody) => {
    // requestManager.post(`${apis.holiUrl}/getteams`, null, reqBody)
    // .catch((err) => Boom.serverUnavailable(err));
  }

  const getChampionship = (reqBody, headers) => {

    let uri = `${apis.holiUrl}/championship/getChampionship`
    const urlQuerystring = qs.stringify({championshipId: reqBody.championshipId})
    uri = `${uri}?${urlQuerystring}`

    return requestManager.get(uri, headers)
      .catch((err) => {
        throw Boom.serverUnavailable(err)
      });
  }

  return {
    getTeams,
    getChampionship
  }
}