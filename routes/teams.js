var express = require('express');
var router = express.Router({mergeParams: true});
const {Trainer, Team} = require('../db/schema')



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
    res.render('teams/new', {
        trainerId: req.params.trainerId
    })
})

//Show One

router.get('/:id', (req, res) => {
    Trainer.findById(req.params.trainerId)
        .then((trainer) => {
            const teams = trainer.teams
            const team = teams.id(req.params.id)
            const pokemon = team.pokemon
            res.render('teams/show', {
                trainer,
                pokemon,
                team
            })
        })
})

//Edit

router.get('/:teamId/edit', (req, res) => {
    Trainer.findById(req.params.trainerId)
    .then((trainer) => {
    
        const team = trainer.teams.id(req.params.teamId)
      res.render('teams/edit', {trainer,team })
    })
  })


//Create

router.post('/', (req, res) => {
    const name = req.body.name
    const newTeam = new Team(req.body)
    Trainer.findById(req.params.trainerId)
        .then((trainer) => {
            trainer.teams.push(newTeam)
            return trainer.save()
        })
        .then((trainer) => {
            console.log(trainer)
            const team = trainer.teams.find(team => team.name === name)
            res.redirect(`/trainers/${req.params.trainerId}/teams/${team._id}`)
        })
})

//Update

router.put('/:teamId', (req, res) => {
    Trainer.findById(req.params.trainerId)
    .then((trainer) => {
            const newTeam = trainer.teams.id(req.params.teamId)
            newTeam.name = req.body.name
            newTeam.style = req.body.style
            newTeam.imageUrl = req.body.imageUrl
            return trainer.save()
        })
    .then((trainer) => {
      res.redirect(`/trainers/${req.params.trainerId}/teams/${req.params.teamId}`)
    })
  })


//Delete

router.delete('/:id', (req, res) => {
    Trainer.findById(req.params.trainerId)
        .then((trainer) => {
            const deleteTeam = trainer.teams.id(req.params.id)
            deleteTeam.remove()
            return trainer.save()
        })
        .then(() => {
            res.redirect(`/trainers/${req.params.trainerId}`)
        })
})




module.exports = router;