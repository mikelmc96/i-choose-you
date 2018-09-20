var express = require('express');
var router = express.Router({mergeParams: true});
const { Trainer } = require('../db/schema')

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






module.exports = router