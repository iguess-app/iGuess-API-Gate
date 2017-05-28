'use Strict';

const Boom = require('boom');
const qs = require('querystring')

module.exports = (app) => {
  const requestManager = app.coincidents.Managers.requestManager;
  const apis = app.coincidents.Config.apis;

  const createGuessLeague = (reqBody, headers) => {
    let uri = `${apis.guessUrl}/guessleague/create`

    return requestManager.post(uri, headers, reqBody)
      .catch((err) => {
        throw Boom.serverUnavailable(err)
      });
  }

  return {
    createGuessLeague
  }
}