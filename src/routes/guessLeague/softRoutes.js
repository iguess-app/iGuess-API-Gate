'use strict'

const guessLeagueController = require('../../controllers/guessLeagueController')
const server = require('../../../configServer')

server.route({
  path: '/guessleague/listGuessesLeagues',
  method: 'GET',
  config: {
    handler: (request, reply) => {
      guessLeagueController.listGuessesLeagues(request, reply)
    }
  }
})

server.route({
  path: '/guessleague/editGuessLeague',
  method: 'PATCH',
  config: {
    handler: (request, reply) => {
      guessLeagueController.editGuessLeague(request, reply)
    }
  }
})

server.route({
  path: '/guessleague/quitGuessLeague',
  method: 'DELETE',
  config: {
    handler: (request, reply) => {
      guessLeagueController.quitGuessLeague(request, reply)
    }
  }
})

server.route({
  path: '/guessleague/kickUserFromGuessLeague',
  method: 'DELETE',
  config: {
    handler: (request, reply) => {
      guessLeagueController.kickUserFromGuessLeague(request, reply)
    }
  }
})

//TODO: ver responsabilidade e funcionalidade dessa rota
/*server.route({
  path: '/guessleague/inviteToGuessLeague',
  method: 'PATCH',
  config: {
    handler: (request, reply) => {
      guessLeagueController.inviteToGuessLeague(request, reply)
    }
  }
}) */

//TODO: ver responsabilidade e funcionalidade dessa rota
/*server.route({
  path: '/guessleague/inviteResponse',
  method: 'PATCH',
  config: {
    handler: (request, reply) => {
      guessLeagueController.inviteResponse(request, reply)
    }
  }
}) */

server.route({
  path: '/guessleague/putCaptain',
  method: 'PATCH',
  config: {
    handler: (request, reply) => {
      guessLeagueController.putCaptain(request, reply)
    }
  }
})

server.route({
  path: '/guessleague/quitCaptain',
  method: 'DELETE',
  config: {
    handler: (request, reply) => {
      guessLeagueController.quitCaptain(request, reply)
    }
  }
})

server.route({
  path: '/guessleague/addToGuessLeague',
  method: 'PATCH',
  config: {
    handler: (request, reply) => {
      guessLeagueController.addToGuessLeague(request, reply)
    }
  }
})