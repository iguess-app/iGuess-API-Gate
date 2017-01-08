'use Strict';

const Boom = require('boom');

module.exports = (app) => {
  const requestManager = app.src.managers.requestManager;

  const getTeams = (reqBody) => 
    requestManager.post('http://localhost:9001/getteams', null, reqBody)
      .catch((err) => Boom.serverUnavailable(err));
  

  const setTeams = (reqBody) => 
    requestManager.post('http://localhost:9001/setteams', null, reqBody)
      .catch((err) => Boom.serverUnavailable(err));

  return {
    getTeams,
    setTeams
  }
}