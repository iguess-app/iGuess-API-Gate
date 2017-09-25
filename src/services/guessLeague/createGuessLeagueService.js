'use strict'

const guessLeagueRepository = require('../../repositories').guessLeagueRepository
const personalRepository = require('../../repositories').personalRepository
const holiRepository = require('../../repositories').holiRepository

const createGuessLeague = (reqBody, headers) => 

  //personalRepository.userNameExists(reqBody.inviteads, headers)

   holiRepository.getChampionship(reqBody, headers)
    .then((championship) => _setChampionship(championship, reqBody))
    .then((payload) => guessLeagueRepository.createGuessLeague(payload, headers))
    .then((guessLeagueCreated) => {
      //personalRepository.setGuessLeagueNotifications(reqBody, headers)
      return guessLeagueCreated
    })


const _setChampionship = (championship, reqBody) => {
  reqBody.championship = championship
  
return reqBody
}


module.exports = () => createGuessLeague