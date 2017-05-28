'use Strict';

const Boom = require('boom');
const qs = require('querystring')

module.exports = (app) => {
  const requestManager = app.coincidents.Managers.requestManager;
  const apis = app.coincidents.Config.apis;

  const getProfile = (reqBody, headers) =>{
    let uri = `${apis.personalUrl}/profiles/getProfile`
    const urlQuerystring = qs.stringify({userName: reqBody.userName})
    uri = `${uri}?${urlQuerystring}`
    
    return requestManager.get(uri, headers, reqBody)
    .catch((err) => Boom.serverUnavailable(err));
  }
  const singIn = (reqBody) =>
    requestManager.post(`${apis.personalUrl}/getteams`, null, reqBody)
    .catch((err) => Boom.serverUnavailable(err));


  return {
    getProfile,
    singIn
  }
}