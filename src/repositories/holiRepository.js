'use Strict';

const Boom = require('boom');

module.exports = (app) => {
  const requestManager = app.coincidents.Managers.requestManager;
  const apis = app.coincidents.Config.apis;

  const getTeams = (reqBody) =>
    requestManager.post(`${apis.holiUrl}/getteams`, null, reqBody)
    .catch((err) => Boom.serverUnavailable(err));


  const setTeams = (reqBody) =>
    requestManager.post(`${apis.holiUrl}/setteams`, null, reqBody)
    .catch((err) => Boom.serverUnavailable(err));

  return {
    getTeams,
    setTeams
  }
}