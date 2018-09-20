var express = require('express');
var router = express.Router({mergeParams: true});
const { Trainer } = require('../db/schema')

//Show all

router.get('/', (req, res) => {
    Trainer.findById(req.params.trainerId)
    .then((trainer) => {
        const team = trainer.teams.id(req.params.teamId)
        const pokemon = team.pokemon
        res.render('pokemon/index', {
            trainerId: req.params.trainerId,
            teamId: req.params.teamId,
            pokemon
        })
    })
})

//Show One

router.get('/:id', (req, res) => {
    Trainer.findById(req.params.trainerId)
    .then((trainer) => {
        res.render('pokemon/show', {
            trainerId: req.params.trainerId,
            teamId: req.params.teamId,
            pokemon: trainer.teams.id(req.params.id)
        })
    })
})

module.exports = router;