var express = require('express');
var router = express.Router({mergeParams: true});
const { Trainer, Pokemon } = require('../db/schema')

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

//New Pokemon form

router.get('/new', (req, res) => {
    res.render('pokemon/new', {
        trainerId: req.params.trainerId,
        teamId: req.params.teamId
    })
})

//Show One

router.get('/:id', (req, res) => {
    Trainer.findById(req.params.trainerId)
    .then((trainer) => {
        res.render('pokemon/show', {
            trainerId: req.params.trainerId,
            teamId: req.params.teamId,
            pokemon: trainer.teams.id(req.params.teamId).pokemon.id(req.params.id)
        })
    })
})

//Create

router.post('/', (req, res) => {
    const newPokemon = new Pokemon(req.body)
    Trainer.findById(req.params.trainerId)
        .then((trainer) => {
            const team = trainer.teams.id(req.params.teamId)
            team.pokemon.push(newPokemon)
            return trainer.save()
        })
        .then((trainer) => {
            res.redirect(`/trainers/${trainer._id}/teams/${req.params.teamId}`)
        })
})


module.exports = router;