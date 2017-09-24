'use strict'

const guessRepository = require('../../repositories').guessRepository
const personalRepository = require('../../repositories').personalRepository
const holiRepository = require('../../repositories').holiRepository

const createGuessLeague = (reqBody, headers) => 

  //personalRepository.userNameExists(reqBody.inviteads, headers)

   holiRepository.getChampionship(reqBody, headers)
    .then((championship) => _setChampionship(championship, reqBody))
    .then((payload) => guessRepository.createGuessLeague(payload, headers))
    .then((guessLeagueCreated) => {
      //personalRepository.sendGuessLeagueNotifications(reqBody, headers)
      return guessLeagueCreated
    })


const _setChampionship = (championship, reqBody) => {
  reqBody.championship = championship
  
return reqBody
}


module.exports = () => createGuessLeague