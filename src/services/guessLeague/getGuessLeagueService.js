'use strict'

const Promise = require('bluebird')

module.exports = (app) => {
  const personalRepository = app.src.repositories.personalRepository
  const guessRepository = app.src.repositories.guessRepository

  const getGuessLeague = (request, headers) => guessRepository.getGuessLeague(request, headers)
    .then((guessLeagueFound) => _getUserData(guessLeagueFound, headers, personalRepository))

  return getGuessLeague
}


const _getUserData = (guessLeagueFound, headers, personalRepository) => {
  const arrayPromise = guessLeagueFound.players.map((player) => {
    const requestObj = {
      userRef: player.userRef
    }

    return personalRepository.getProfile(requestObj, headers)
  })

  return Promise.each(arrayPromise, (userData, index) => {
    guessLeagueFound.players[index].userName = userData.userName ? userData.userName : ''
    guessLeagueFound.players[index].avatar = userData.avatar ? userData.avatar : ''
  }).then(() => guessLeagueFound)

}