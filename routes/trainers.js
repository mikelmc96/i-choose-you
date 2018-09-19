var express = require('express');
var router = express.Router();
const {Trainer} = require('../db/schema') 

/* GET users listing. */
router.get('/', function(req, res, next) {
  Trainer.find()
  .then((trainers) => {
    res.render('trainers/index', {trainers})
  })
})

module.exports = router;
