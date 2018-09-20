var express = require('express');
var router = express.Router({mergeParams: true});
const { Trainer } = require('../db/schema')
const { Team } = require('../db/schema')

//Show All

router.get('/', (req, res) => {
    Trainer.findById(req.params.trainerId)
    .then((trainer) => {
        res.render('teams/index', {
            trainerId: req.params.trainerId,
            teams: trainer.teams
        })
    })
})

//New Team form

router.get('/new', (req, res) => {
    res.render('teams/new')
  })

//Show One

router.get('/:id', (req, res) => {
    Trainer.findById(req.params.trainerId)
    .then((trainer) => {
        res.render('teams/show', {
            trainerId: req.params.trainerId,
            team: trainer.teams.id(req.params.id)
        })
    })
})

//Create

router.post('/', (req, res) => {
    Team.create(req.body)
    .then((team) => {
      res.redirect(`/trainers/${trainer._id}/teams/${team._id}`)
    })
  })








module.exports = router