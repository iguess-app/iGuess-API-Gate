'use Strict';

module.exports = (app) => {
  const requestManager = app.coincidents.Managers.requestManager;
  const apis = app.coincidents.Config.apis;

  const createGuessLeague = (reqBody, headers) => {
    const uri = `${apis.guessUrl}/guessleague/create`

    return requestManager.post(uri, headers, reqBody)
  }

  const getGuessLeague = (request, headers) => {
    const uri = `${apis.guessUrl}/guessleague/getGuessLeague`

    return requestManager.get(uri, headers, request)
  }

  return {
    createGuessLeague,
    getGuessLeague
  }
}