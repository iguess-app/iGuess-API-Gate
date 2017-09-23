'use Strict';

module.exports = (app) => {
  const requestManager = app.coincidents.Managers.requestManager;
  const apis = app.coincidents.Config.apis;

  const createGuessLeague = (reqBody, headers) => {
    const uri = `${apis.guessUrl}/guessleague/create`

    return requestManager.post(uri, headers, reqBody)
      .catch((err) => {
        throw err
      });
  }

  return {
    createGuessLeague
  }
}