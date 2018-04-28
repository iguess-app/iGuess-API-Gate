'use strict'

const Boom = require('boom')

const coincidents = require('iguess-api-coincidents')
const log = coincidents.Managers.log

const errorTypeEnum = {
  connectionRefused: 'ECONNREFUSED'
}

const treatError = (err, mandatoryReturn = true) => {
  log.error(err)
  if (err.error.code === errorTypeEnum.connectionRefused) {
    switch (mandatoryReturn) {
      case false:
        return Boom.serverUnavailable(err.message)
      case true:
      default:
        throw Boom.serverUnavailable(err.message)
    }
  }

  const microServiceError = Boom.create(err.error.statusCode, err.error.message, err)
  microServiceError.output.errorCode = err.error.errorCode
  microServiceError.output.payload.errorCode = err.error.errorCode

  if (mandatoryReturn) {
    throw microServiceError
  }

  return microServiceError
}

module.exports = treatError