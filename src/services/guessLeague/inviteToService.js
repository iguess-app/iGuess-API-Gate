'use strict'

const Promise = require('bluebird')
const Boom = require('boom')

const guessLeagueRepository = require('../../repositories').guessLeagueRepository
const personalRepository = require('../../repositories').personalRepository

const inviteTo = (request, headers) => {

  return _verifyIfInvitatorIsInviteadsFriends(request, headers)
    .then(() => guessLeagueRepository.inviteToGuessLeague(request, headers))
    //.then((guessLeagueCreated) => personalRepository)
    //TODO: Ultima promise: Mandar notificações
}

const _verifyIfInvitatorIsInviteadsFriends = (request, headers) => {
  const areFriendsArrayPromise = request.userRefInviteads.map((userRefInvited) => {
    const areFriendsObj = {
      userRefFriend: userRefInvited,
      userRef: request.userRef
    }

    return personalRepository.areFriends(areFriendsObj, headers)
  })
  
  return Promise.each(areFriendsArrayPromise, (friendsResponse) => {
    if (friendsResponse.areFriends === false) {
      throw Boom.notAcceptable()
    }
  })
}


module.exports = () => inviteTo