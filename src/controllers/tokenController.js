'use strict'

const tokenVerifyService = require('../services/tokenVerifyService')

const tokenVerify = (request, reply) => {
  const query = request.query
  const headers = request.headers

  tokenVerifyService(query, headers)
    .then((response) => reply(response))
    .catch((err) => reply(err))
}

module.exports = {
  tokenVerify
}