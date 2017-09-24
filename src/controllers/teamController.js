'use strict'

const teamService = require('../services/teamService')

const getTeams = (request, reply) => {
  teamService.getTeams(request.payload)
    .then((teams) => {
      reply(teams)
    });
}

const setTeams = (request, reply) => {
  return true;
}

module.exports = {
  getTeams,
  setTeams
}