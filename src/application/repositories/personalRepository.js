'use Strict';

const Boom = require('boom');

module.exports = (app) => {
  const requestManager = app.src.managers.requestManager;

  const getProfile = (headers) => 
    new Promise((resolve, reject) => {
      resolve(false);
    })
    // requestManager.get('http://localhost:9002/getprofile', headers)
    //   .catch((err) => Boom.serverUnavailable(err));

  return { getProfile }
}