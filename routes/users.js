const { response, request } = require('express');
var express = require('express');
var router = express.Router();
const templatecopy = require('../models/signupModels')



/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});




router.post('/signup', (request, response) => {
  console.log('user', request.body)

  const SignedUpUser = new templatecopy({
    FirstName: request.body.FirstName,
    LastName: request.body.LastName,
    Email: request.body.Email,
    PersonalTrainer: request.body.PersonalTrainer,
    Owner: request.body.Owner,
    UserName: request.body.UserName,
    PassWord: request.body.PassWord,



  })

  SignedUpUser.save()
    .then(data => {
      console.log('line 31', data)
      response.json(JSON.stringify(data))

    })


    .catch(error => {
      console.log(error)
      // response.json(JSON.stringify(error))
    })






})

async function GetAllUsers(SignedUpUser) {
  const users = await SignedUpUser.find()
  console.log(users)
}


module.exports = router;
