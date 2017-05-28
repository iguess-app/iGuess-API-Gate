'use Strict';

module.exports = (app) => {

  const personalRepository = app.src.repositories.personalRepository;

  const getProfile = (reqBody) => 
    personalRepository.getProfile(reqBody);
  

  const someElse = () => {
    personalRepository.setTeams();
  }
  
  return { getProfile }
}