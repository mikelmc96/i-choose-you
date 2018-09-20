require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/project-two', { useNewUrlParser: true })
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })

const Schema = require('./schema')

const { Trainer, Team, Pokemon } = Schema

//Red's Kanto Pokemon

const pidgeot = new Pokemon({
    imgUrl: 'https://i.imgur.com/ITzVZgV.png',
    name: 'Pidgeot',
    dexNumber: 18,
    type: 'Flying/Normal',
    moves: 'Hurricane/Mirror Move/Steel Wing/Toxic',
})

const snorlax = new Pokemon({
    imgUrl: 'https://i.imgur.com/0aiDvOs.png',
    name: 'Snorlax',
    dexNumber: 143,
    type: 'Normal',
    moves: 'Rest/Earthquake/Sleep Talk/Belly Drum',
})

const venusaur = new Pokemon({
    imgUrl: 'https://i.imgur.com/1ZIw9mi.png',
    name: 'Venusaur',
    dexNumber: 3,
    type: 'Grass/Poison',
    moves: 'Solar Beam/Synthesis/Sludge Bomb/Sleep Powder'
})

const blastoise = new Pokemon({
    imgUrl: 'https://i.imgur.com/5BoaYHt.png',
    name: 'Blastoise',
    dexNumber: 9,
    type: 'Water',
    moves: 'Hydro Pump/Skull Bash/Muddy Water/Blizzard'
})

const charizard = new Pokemon({
    imgUrl: 'https://i.imgur.com/kfweKEE.png',
    name: 'Charizard',
    dexNumber: 6,
    type: 'Fire/Flying',
    moves: 'Flamethrower/Aerial Ace/Sunny Day/Hyper Beam'
})

const pikachu = new Pokemon({
    imgUrl: 'https://i.imgur.com/tMy078S.png',
    name: 'Pikachu',
    dexNumber: 25,
    type: 'Electric',
    moves: 'Thunder/Slam/Agility/Charge'
})

//Blue's Kanto Pokemon

const alakazam = new Pokemon({
    imgUrl: 'https://i.imgur.com/P5HYj82.png',
    name: 'Alakazam',
    dexNumber: 65,
    type: 'Psychic',
    moves: 'Psychic/Trick/Future Sight/Calm Mind'
})

const rhydon = new Pokemon({
    imgUrl: 'https://i.imgur.com/Mj31Z4J.png',
    name: 'Rhydon',
    dexNumber: 112,
    type: 'Rock/Ground',
    moves: 'Horn Drill/Earthquake/Stone Edge/Focus Blast'
})

const exeggutor = new Pokemon({
    imgUrl: 'https://i.imgur.com/J1lrehw.png',
    name: 'Exeggutor',
    dexNumber: 103,
    type: 'Grass/Psychic',
    moves: 'Wood Hammer/Hyponosis/Seed Bomb/Psyshock'
})

const arcanine = new Pokemon({
    imgUrl: 'https://i.imgur.com/Qe77Y54.png',
    name: 'Arcanine',
    dexNumber: 59,
    type: 'Fire',
    moves: 'Fire Blast/Extreme Speed/Flare Blitz/Thrash'
})

const cloyster = new Pokemon({
    imgUrl: 'https://i.imgur.com/x0KQ8Fw.png',
    name: 'Cloyster',
    dexNumber: 91,
    type: 'Ice/Water',
    moves: 'Ice Beam/Toxic Spikes/Icicle Crash/Protect'
})

const gyarados = new Pokemon({
    imgUrl: 'https://i.imgur.com/lyixJyn.png',
    name: 'Gyarados',
    dexNumber: 130,
    type: 'Flying/Water',
    moves: 'Surf/Thrash/Hyper Beam/Crunch'
})

//Blue's johto Pokemon

const sneasel = new Pokemon({
    imgUrl: 'https://i.imgur.com/zMBlUYU.png',
    name: 'Sneasel',
    dexNumber: 215,
    type: 'Dark/Ice',
    moves: 'Icecicle Crash/Haze/Shadow Pulse/Thief'
})

const crobat = new Pokemon({
    imgUrl: 'https://i.imgur.com/H81fTim.png',
    name: 'Crobat',
    dexNumber: 169,
    type: 'Poison/Flying',
    moves: 'Aerial Ace/Toxic/Crunch/Sludge Bomb'
})

const ursaring = new Pokemon({
    imgUrl: 'https://i.imgur.com/J1lrehw.png',
    name: 'Ursaring',
    dexNumber: 217,
    type: 'Normal',
    moves: 'Body Slam/Rest/Hammer Arm/Strength'
})

const misdreavus = new Pokemon({
    imgUrl: 'https://i.imgur.com/DSKNc6L.png',
    name: 'Misdreavus',
    dexNumber: 200,
    type: 'Ghost',
    moves: 'Spite/Curse/Shadow Ball/Payback'
})

const scizor = new Pokemon({
    imgUrl: 'https://i.imgur.com/r47jO3d.png',
    name: 'Scizor',
    dexNumber: 212,
    type: 'Steel/Bug',
    moves: 'Megahorn/Steel Claw/Aerial Ace/Steel Defense'
})

const magcargo = new Pokemon({
    imgUrl: 'https://i.imgur.com/kVYhutH.png',
    name: 'Magcargo',
    dexNumber: 219,
    type: 'Fire/Rock',
    moves: 'Stone Edge/Fire Blast/Overheat/Sunny Day'
})

const redChampion = new Team({
    imgUrl: 'https://i.imgur.com/yUbhiZs.png?1',
    name: "Red's Champion Team",
    style: 'Balanced',
    pokemon: [pikachu, charizard, blastoise, venusaur, snorlax, pidgeot]
})

const blueChampion = new Team({
    imgUrl: 'https://i.imgur.com/yUbhiZs.png?1',
    name: "Blue's Champion Team",
    style: 'Offensive',
    pokemon: [alakazam, rhydon, exeggutor, arcanine, cloyster, gyarados]
})

const blueJohto = new Team({
    imgUrl: 'https://i.imgur.com/ZM3u72x.png',
    name: "Blue's Johto Team",
    style: 'Offensive',
    pokemon: [sneasel, crobat, ursaring, misdreavus, scizor, magcargo]
})

const blue = new Trainer({
    imgUrl: 'https://i.imgur.com/NX8ySBp.png',
    imgPoke: 'https://i.imgur.com/scXpXqu.png?1',
    name: 'Blue',
    age: 11,
    gender: 'M',
    region: 'Kanto',
    hometown: 'Pallet Town',
    teams: [blueChampion, blueJohto]
})

const red = new Trainer({
    imgUrl: 'https://i.imgur.com/Q3q1I04.png',
    imgPoke: 'https://i.imgur.com/scXpXqu.png?1',
    name: 'Red',
    age: 11,
    gender: 'M',
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