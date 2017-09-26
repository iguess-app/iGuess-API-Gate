'use strict'

const Promise = require('bluebird')
const Boom = require('boom')

const Translate = require('iguess-api-coincidents').Translate
const guessLeagueRepository = require('../../repositories').guessLeagueRepository
const personalRepository = require('../../repositories').personalRepository

const inviteTo = (request, headers) => {

  return _verifyIfInvitatorIsInviteadsFriends(request, headers)
    .then(() => guessLeagueRepository.inviteToGuessLeague(request, headers))
    .then((guessLeagueCreated) => {
      const setGuessLeagueNotificationObj = guessLeagueCreated
      setGuessLeagueNotificationObj.invitatorUserRef = request.userRef

      return personalRepository.setGuessLeagueNotifications(setGuessLeagueNotificationObj)
    }).then(() => ({
      usersInviteads: true
    }))
}

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


module.exports = () => inviteTo