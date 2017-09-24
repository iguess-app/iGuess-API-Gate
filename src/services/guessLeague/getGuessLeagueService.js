'use strict'

const Promise = require('bluebird')

const guessRepository = require('../../repositories').guessRepository
const personalRepository = require('../../repositories').personalRepository

const getGuessLeague = (request, headers) => guessRepository.getGuessLeague(request, headers)
  .then((guessLeagueFound) => _getUserData(guessLeagueFound, headers))


const _getUserData = (guessLeagueFound, headers) => {
  const arrayPromise = guessLeagueFound.players.map((player) => {
    const requestObj = {
      userRef: player.userRef
    }

    return personalRepository.getProfile(requestObj, headers)
  })

  return Promise.each(arrayPromise, (userData, index) => {
    guessLeagueFound.players[index].userName = userData.userName ? userData.userName : ''
    guessLeagueFound.players[index].avatar = userData.avatar ? userData.avatar : ''
    guessLeagueFound.players[index].name = userData.name ? userData.name : ''
  }).then(() => guessLeagueFound)

}

module.exports = () => getGuessLeague