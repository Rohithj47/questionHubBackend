var express = require('express');
var router = express.Router();
var User = require('../database').then(module => module.User)

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/all', (req, res, next) => {
  User.findAll()
    .then((persons) => {
      res.status(200).send(JSON.stringify(persons));
    })
    .catch((err) => {
      res.status(500).send(JSON.stringify(err));
    })
})

export default router;
