'use Strict';

module.exports = (app) => {
  const createGuessLeagueService = app.src.services.guessLeague.createGuessLeagueService;

  const createGuessLeague = (request, reply) => {
    createGuessLeagueService.createGuessLeague(request.payload, request.headers)
      .then((teams) => {
        reply(teams)
      })
      .catch((err) =>
        reply(err)
      )
  }

  return {
    createGuessLeague
  }
}