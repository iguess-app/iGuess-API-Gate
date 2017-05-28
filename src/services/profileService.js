'use Strict';

module.exports = (app) => {

  const personalRepository = app.src.repositories.personalRepository;

  const getProfile = (reqBody, headers) => {

    return personalRepository.getProfile(reqBody, headers);
  }

  return {
    getProfile
  }
}