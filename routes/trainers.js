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

//New, Render Form


//Show one

router.get('/:id', (req, res) => {
  Trainer.findById(req.params.id)
  .then((trainer) => {
    res.render('trainers/show', {trainer})
  })
})

module.exports = router;
