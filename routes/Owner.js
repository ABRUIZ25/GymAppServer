const { response, request } = require('express');
var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});


router.post('/Owner', async (req, res) => {
    console.log('hello from owner')
})

module.exports = router;