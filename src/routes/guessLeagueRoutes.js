'use strict';

const Joi = require('joi');

module.exports = (app) => {
  const guessLeagueController = app.src.controllers.guessLeagueController;
  const server = app.configServer;

  server.route({
    path: '/guessLeague/create',
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
};