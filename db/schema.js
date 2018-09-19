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
    name: String,
    region: String,
    hometown: String,
    teams: [TeamSchema]
})