'use Strict';

module.exports = (app) => {
  const personalRepository = app.src.repositories.personalRepository;
  const holiRepository = app.src.repositories.holiRepository;
  const guessRepository = app.src.repositories.guessRepository;

  const createGuessLeague = (reqBody, headers) => {

    //personalRepository.userNameExists(reqBody.inviteads, headers)

    return holiRepository.getChampionship(reqBody, headers)
      .then((championship) => _setChampionship(championship, reqBody))
      .then((payload) => guessRepository.createGuessLeague(payload, headers))
      .then((guessLeagueCreated) => {
        personalRepository.sendGuessLeagueNotification(reqBody, headers)
        return guessLeagueCreated
      })
  }

  const _setChampionship = (championship, reqBody) => {
    reqBody.championship = championship
    return reqBody
  }

  return {
    createGuessLeague
  }
}