require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/project-two', { useNewUrlParser: true })
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })

const Schema = require('./schema')

const { Trainer, Team, Pokemon } = Schema

const pidgeot = new Pokemon({
    imgUrl: '',
    name: 'Pidgeot',
    dexNumber: 18,
    type: 'Flying/Normal',
    moves: 'Hurricane/Mirror Move/Steel Wing/Toxic',
})

const snorlax = new Pokemon({
    imgUrl: '',
    name: 'Snorlax',
    dexNumber: 143,
    type: 'Normal',
    moves: 'Rest/Earthquake/Sleep Talk/Belly Drum',
})

const venusaur = new Pokemon({
    imgUrl: '',
    name: 'Venusaur',
    dexNumber: 3,
    type: 'Grass/Poison',
    moves: 'Solar Beam/Synthesis/Sludge Bomb/Sleep Powder'
})

const blastoise = new Pokemon({
    imgUrl: '',
    name: 'Blastoise',
    dexNumber: 9,
    type: 'Water',
    moves: 'Hydro Pump/Skull Bash/Muddy Water/Blizzard'
})

const charizard = new Pokemon({
    imgUrl: '',
    name: 'Charizard',
    dexNumber: 6,
    type: 'Fire/Flying',
    moves: 'Flamethrower/Aerial Ace/Sunny Day/Hyper Beam'
})

const pikachu = new Pokemon({
    imgUrl: '',
    name: 'Pikachu',
    dexNumber: 25,
    type: 'Electric',
    moves: 'Thunder/Slam/Agility/Charge'
})

const alakazam = new Pokemon({
    imgUrl: '',
    name: 'Alakazam',
    dexNumber: 65,
    type: 'Psychic',
    moves: 'Psychic/Trick/Future Sight/Calm Mind'
})

const rhydon = new Pokemon({
    imgUrl: '',
    name: 'Rhydon',
    dexNumber: 112,
    type: 'Rock/Ground',
    moves: 'Horn Drill/Earthquake/Stone Edge/Focus Blast'
})

const exeggutor = new Pokemon({
    imgUrl: '',
    name: 'Exeggutor',
    dexNumber: 103,
    type: 'Grass/Psychic',
    moves: 'Wood Hammer/Hyponosis/Seed Bomb/Psyshock'
})

const arcanine = new Pokemon({
    imgUrl: '',
    name: 'Arcanine',
    dexNumber: 59,
    type: 'Fire',
    moves: 'Fire Blast/Extreme Speed/Flare Blitz/Thrash'
})

const cloyster = new Pokemon({
    imgUrl: '',
    name: 'Cloyster',
    dexNumber: 91,
    type: 'Ice/Water',
    moves: 'Ice Beam/Toxic Spikes/Icicle Crash/Protect'
})

const gyarados = new Pokemon({
    imgUrl: '',
    name: 'Gyarados',
    dexNumber: 130,
    type: 'Flying/Water',
    moves: 'Surf/Thrash/Hyper Beam/Crunch'
})

const redChampion = new Team({
    imgUrl: '',
    name: "Red's Champion Team",
    style: 'Balanced',
    pokemon: [pikachu, charizard, blastoise, venusaur, snorlax, pidgeot]
})

const blueChampion = new Team({
    imgUrl: '',
    name: "Blue's Champion Team",
    style: 'Offensive',
    pokemon: [alakazam, rhydon, exeggutor, arcanine, cloyster, gyarados]
})

const blue = new Trainer({
    imgUrl: 'https://i.imgur.com/NX8ySBp.png',
    name: 'Blue',
    region: 'Kanto',
    hometown: 'Pallet Town',
    teams: [blueChampion]
})

const red = new Trainer({
    imgUrl: 'https://i.imgur.com/Q3q1I04.png',
    name: 'Red',
    region: 'Kanto',
    hometown: 'Pallet Town',
    teams: [redChampion]
})

Trainer.deleteMany()
    .then(() => {
        return Trainer.insertMany([red, blue])
    })
    .then(() => {
        console.log('Done Seeding')
        mongoose.connection.close()
    })