'use Strict';

const Boom = require('boom');

module.exports = (app) => {
  const requestManager = app.coincidents.Managers.requestManager;
  const apis = app.coincidents.Config.apis;

  const singIn = (reqBody) =>
    requestManager.post(`${apis.personalUrl}/getteams`, null, reqBody)
    .catch((err) => Boom.serverUnavailable(err));


  return {
    singIn
  }
}