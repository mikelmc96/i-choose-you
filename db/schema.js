const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PokemonSchema = new Schema({
    imgUrl: String,
    name: String,
    dexNumber: Number,
    type: String,
    moves: String,
})

const TeamSchema = new Schema({
    imgUrl: String,
    name: String,
    style: String,
    pokemon: [PokemonSchema]
})

const TrainerSchema = new Schema({
    imgUrl: String,
    imgPoke: String,
    name: String,
    age: Number,
    gender: String,
    region: String,
    hometown: String,
    teams: [TeamSchema]
})

const PokemonModel = mongoose.model('Pokemon', PokemonSchema)
const TeamModel = mongoose.model('Team', TeamSchema)
const TrainerModel = mongoose.model('Trainer', TrainerSchema)

module.exports = {
    Pokemon: PokemonModel,
    Team: TeamModel,
    Trainer: TrainerModel
}