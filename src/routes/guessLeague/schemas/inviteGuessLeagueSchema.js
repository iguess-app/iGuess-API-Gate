'use strict'

const Joi = require('joi')

const Config = require('iguess-api-coincidents').Config
const ID_SIZE = Config.mongo.idStringSize

const request = Joi.object({
  userRefInviteads: Joi.array().items(
    Joi.string().length(ID_SIZE)
  ).required(),
  guessLeagueRef: Joi.string().required().length(ID_SIZE),
  championshipRef: Joi.string().required().length(ID_SIZE)
})

const response = Joi.object({})

module.exports = {
  request,
  response
}