'use Strict';

const holiRepository = require('../repositories').holiRepository

const getTeams = (reqBody) => holiRepository.getTeams(reqBody)

const setTeams = () => {
  holiRepository.setTeams()
}

module.exports = {
  getTeams,
  setTeams
}