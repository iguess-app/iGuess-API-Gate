'use Strict';

module.exports = (app) => {
  const guessLeaguesServices = app.src.services.guessLeague
  const createGuessLeagueService = guessLeaguesServices.createGuessLeagueService

  const createGuessLeague = (request, reply) => {
    createGuessLeagueService.createGuessLeague(request.payload, request.headers)
      .then((teams) => reply(teams))
      .catch((err) => reply(err))
  }

  const getGuessLeague = (request, reply) => {
    guessLeaguesServices.getGuessLeagueService(request.query, request.headers)
      .then((teams) => reply(teams))
      .catch((err) => reply(err))
  }

  return {
    createGuessLeague,
    getGuessLeague
  }
}