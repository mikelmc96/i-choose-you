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

router.get('/new', (req, res) => {
  res.render('trainers/new')
})

//Show one

router.get('/:id', (req, res) => {
  Trainer.findById(req.params.id)
  .then((trainer) => {
    const teams = trainer.teams
    res.render('trainers/show', {trainer, teams})
  })
})

//Edit

router.get('/:id/edit', (req, res) => {
  Trainer.findById(req.params.id)
  .then((trainer) => {
    res.render('trainers/edit', { trainer })
  })
})


//Create

router.post('/', (req, res) => {
  Trainer.create(req.body)
  .then((trainer) => {
    res.redirect(`/trainers/${trainer._id}`)
  })
})

//Update

router.put('/:id', (req, res) => {
  Trainer.findByIdAndUpdate(req.params.id, req.body)
  .then((trainer) => {
    res.redirect(`/trainers/${trainer._id}`)
  })
})

//Delete

router.delete('/:id', (req, res) => {
  Trainer.findByIdAndRemove(req.params.id)
  .then(() => {
    res.redirect('/trainers')
  })
})

module.exports = router;
