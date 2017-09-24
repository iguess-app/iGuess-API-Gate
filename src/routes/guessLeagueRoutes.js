'use strict'

const Joi = require('joi')

const guessLeagueController = require('../controllers/guessLeagueController')
const server = require('../../configServer')

server.route({
  path: '/guessleague/create',
  method: 'POST',
  config: {
    handler: (request, reply) => {
      guessLeagueController.createGuessLeague(request, reply)
    },
    validate: {
      payload: Joi.object({
        guessLeagueName: Joi.string().required(),
        championshipId: Joi.string().required(),
        userID: Joi.string().required(),
        inviteads: Joi.array().required()
      }),
      headers: Joi.object({
        language: Joi.string().default('en-us')
      }).unknown()
    },
    response: {
      schema: Joi.object({
        guessLeagueCreated: Joi.bool().required(),
        guessLeague: Joi.object({
          guessLeagueName: Joi.string().required(),
          administrator: Joi.string().required(),
          championship: Joi.object({
            _id: Joi.string().required(),
            league: Joi.string().required(),
            season: Joi.string().required(),
            championship: Joi.string().required()
          }).required(),
          inviteads: Joi.array().required(),
          players: Joi.array().required(),
          _id: Joi.string(),
          __v: Joi.number()
        }).required()
      }).meta({
        className: 'Response'
      })
    }
  }
})

server.route({
  path: '/guessleague/getGuessLeague',
  method: 'GET',
  config: {
    handler: (request, reply) => {
      guessLeagueController.getGuessLeague(request, reply)
    }
  }
})