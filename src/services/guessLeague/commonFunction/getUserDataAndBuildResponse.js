'use strict'

const Promise = require('bluebird')

const personalRepository = require('../../../repositories').personalRepository

const getUserDataAndBuildResponse = (guessLeagueFound, headers) => {
  const arrayPromise = guessLeagueFound.players.map((player) => {
    const requestObj = {
      userRef: player.userRef
    }

    return personalRepository.getProfile(requestObj, headers)
  })

  return Promise.each(arrayPromise, (userData, index) => {
    if (!userData.isBoom) {
      guessLeagueFound.players[index].userName = userData.userName || ''
      guessLeagueFound.players[index].avatar = userData.avatar || ''
      guessLeagueFound.players[index].name = userData.name || ''
      guessLeagueFound.players[index].captain = guessLeagueFound.captains.includes(userData.userRef)
    }
  }).then(() => {
    Reflect.deleteProperty(guessLeagueFound, 'captains')
    
    return guessLeagueFound
  })

}

module.exports = getUserDataAndBuildResponse