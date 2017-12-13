'use strict'

const Promise = require('bluebird')
const Boom = require('boom')

const Translate = require('iguess-api-coincidents').Translate
const guessLeagueRepository = require('../../repositories').guessLeagueRepository
const personalRepository = require('../../repositories').personalRepository

const inviteTo = (request, headers) =>
  _verifyIfInvitatorIsInviteadsFriends(request, headers)
    .then(() => guessLeagueRepository.inviteToGuessLeague(request, headers))
    .then((guessLeague) => personalRepository.setGuessLeagueNotifications(guessLeague, headers))
    .then(() => _returnSucessObj())
    .catch((err) => {
      _undoGuessMicroService(request)
      throw err
    })

const _verifyIfInvitatorIsInviteadsFriends = (request, headers) => {
  const dictionary = Translate.gate.selectLanguage(headers.language)
  const areFriendsArrayPromise = request.userRefInviteads.map((userRefInvited) => {
    const areFriendsObj = {
      userRefFriend: userRefInvited,
      userRef: request.userRef
    }

    return personalRepository.areFriends(areFriendsObj, headers)
  })

  return Promise.each(areFriendsArrayPromise, (friendsResponse) => {
    if (friendsResponse.areFriends === false) {
      throw Boom.notAcceptable(dictionary.notFriendsAtInvite)
    }
  })
}

const _undoGuessMicroService = (request) => {
  //TODO: Desfazer inserção do usuário no array Inviteads na collection do DB de guessLeague para garantir a integridade do sistema
}

const _returnSucessObj = () => ({
  usersInviteads: true
})

module.exports = () => inviteTo