'use strict'

const personalRepository = require('../repositories').personalRepository
const guessTokenVerifyRepository = require('../repositories/guessRepositories').tokenVerifyRepository

const POSITION_ZERO = 0
const POSITION_ONE = 1

const tokenVerify = (query, headers) =>
  Promise.all([
    personalRepository.tokenVerify(query, headers),
    guessTokenVerifyRepository.tokenVerify(query, headers)
  ]).then((tokenResponses) => {
    const personalResponse = tokenResponses[POSITION_ZERO]
    const guessResponse = tokenResponses[POSITION_ONE]
    
    if (personalResponse.isBoom) {
      return guessResponse
    } 
    return personalResponse
  })

module.exports = tokenVerify