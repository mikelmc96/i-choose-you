var express = require('express');
var router = express.Router({mergeParams: true});
const { Trainer, Team } = require('../db/schema')



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
    res.render('teams/new', {trainerId: req.params.trainerId})
  })

//Show One

router.get('/:id', (req, res) => {
    Trainer.findById(req.params.trainerId)
    .then((trainer) => {
        const teams = trainer.teams
        const team = teams.id(req.params.id)
        const pokemon = team.pokemon
        res.render('teams/show', {trainer, pokemon, team})
    })
})

//Create

  router.post('/', (req, res) => {
    const newTeam = new Team(req.body)
    Trainer.findById(req.params.trainerId)
        .then((trainer) => {
            trainer.teams.push(newTeam)
            return trainer.save()
        })
        .then((trainer) => {
            res.redirect(`/trainers/${req.params.trainerId}/teams`)
        })
    })






module.exports = router