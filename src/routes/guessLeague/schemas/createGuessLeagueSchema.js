'use strict'

const Joi = require('joi')

const request = Joi.object({
  guessLeagueName: Joi.string().required(),
  championshipId: Joi.string().required(),
  userID: Joi.string().required(),
  inviteads: Joi.array().required()
})

const response = Joi.object({
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

module.exports = {
  request,
  response
}