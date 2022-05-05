
const { response, request } = require('express');
var express = require('express');
var router = express.Router();
SignUpTemplate = require('../models/signupModels')








/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});



router.post('/login-user', async (req, res) => {
    console.log(req.body)

    const LoginUer = await SignUpTemplate.find({ Email: req.body.LoginUserEmail, PassWord: req.body.LoginUserPassword })
    if (LoginUer.length == 1 && LoginUer[0].Owner == true) {
        router.post('/Owner')

    }

    res.json(LoginUer)


})


module.exports = router;