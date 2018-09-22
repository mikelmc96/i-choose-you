require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/project-two', { useNewUrlParser: true })
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })

const Schema = require('./schema')

const { Trainer, Team, Pokemon } = Schema

//Trying to build a class with Constructor for Pokemon

// class newPokemon {
//     constructor(imgUrl, name, dexNumber, type, moveOne, moveTwo, moveThree, moveFour) {
//         this.imgUrl = this.imgUrl
//         this.name = this.name
//         this.dexNumber = this.dexNumber
//         this.type = this.type
//         this.moveOne = this.moveOne
//         this.moveTwo = this.moveTwo
//         this.moveThree = this.moveThree
//         this.moveFour = this.moveFour
//     } 
// }

// const raichu = new newPokemon('https://i.imgur.com/OF31bIR.png', 'Raichu', 26, 'https://i.imgur.com/pZtQPZG.png?1', 'Thunder', 'Body Slam', 'Volt Tackle', 'Charge')



//Red's Kanto Pokemon

const pidgeot = new Pokemon({
    imgUrl: 'https://i.imgur.com/ITzVZgV.png',
    name: 'Pidgeot',
    dexNumber: 18,
    type: 'https://i.imgur.com/MsH4uzj.png?1',
    moveOne: 'Hurricane',
    moveTwo: 'Mirror Move',
    moveThree: 'Steel Wing',
    moveFour: 'Toxic'
})

const snorlax = new Pokemon({
    imgUrl: 'https://i.imgur.com/0aiDvOs.png',
    name: 'Snorlax',
    dexNumber: 143,
    type: 'https://i.imgur.com/y2yHkrH.png?1',
    moveOne: 'Rest',
    moveTwo: 'Amnesia',
    moveThree: 'Sleep Talk',
    moveFour: 'Belly Drum'
})

const venusaur = new Pokemon({
    imgUrl: 'https://i.imgur.com/1ZIw9mi.png',
    name: 'Venusaur',
    dexNumber: 3,
    type: 'https://i.imgur.com/UbN8xcr.png?1',
    moveOne: 'Solar Beam',
    moveTwo: 'Synthesis',
    moveThree: 'Sludge Bomb',
    moveFour: 'Sleep Powder'
})

const blastoise = new Pokemon({
    imgUrl: 'https://i.imgur.com/5BoaYHt.png',
    name: 'Blastoise',
    dexNumber: 9,
    type: 'https://i.imgur.com/V4NtSCe.png?1',
    moveOne: 'Hydro Pump',
    moveTwo: 'Skull Bash',
    moveThree: 'Muddy Water',
    moveFour: 'Blizzard'
})

const charizard = new Pokemon({
    imgUrl: 'https://i.imgur.com/kfweKEE.png',
    name: 'Charizard',
    dexNumber: 6,
    type: 'https://i.imgur.com/FpnxSI9.png?1',
    moveOne: 'Flamethrower',
    moveTwo: 'Aerial Ace',
    moveThree: 'Sunny Day',
    moveFour: 'Hyper Beam'
})

const pikachu = new Pokemon({
    imgUrl: 'https://i.imgur.com/tMy078S.png',
    name: 'Pikachu',
    dexNumber: 25,
    type: 'https://i.imgur.com/pZtQPZG.png?1',
    moveOne: 'Thunder',
    moveTwo: 'Slam',
    moveThree: 'Agility',
    moveFour: 'Charge'
})

//Blue's Kanto Pokemon

const alakazam = new Pokemon({
    imgUrl: 'https://i.imgur.com/P5HYj82.png',
    name: 'Alakazam',
    dexNumber: 65,
    type: 'https://i.imgur.com/kGXVMXX.png?1',
    moveOne: 'Psychic',
    moveTwo: 'Trick',
    moveThree: 'Future Sight',
    moveFour: 'Calm Mind'
})

const rhydon = new Pokemon({
    imgUrl: 'https://i.imgur.com/Mj31Z4J.png',
    name: 'Rhydon',
    dexNumber: 112,
    type: 'https://i.imgur.com/bHULcoX.png?1',
    moveOne: 'Horn Drill',
    moveTwo: 'Earthquake',
    moveThree: 'Stone Edge',
    moveFour: 'Focus Blast'
})

const exeggutor = new Pokemon({
    imgUrl: 'https://i.imgur.com/J1lrehw.png',
    name: 'Exeggutor',
    dexNumber: 103,
    type: 'https://i.imgur.com/UbN8xcr.png?1',
    moveOne: 'Wood Hammer',
    moveTwo: 'Hypnosis',
    moveThree: 'Seed Bomb',
    moveFour: 'Psychock'
})

const arcanine = new Pokemon({
    imgUrl: 'https://i.imgur.com/Qe77Y54.png',
    name: 'Arcanine',
    dexNumber: 59,
    type: 'https://i.imgur.com/FpnxSI9.png?1',
    moveOne: 'Fire Blast',
    moveTwo: 'Extreme Speed',
    moveThree: 'Flare Blitz',
    moveFour: 'Thrash'
})

const cloyster = new Pokemon({
    imgUrl: 'https://i.imgur.com/x0KQ8Fw.png',
    name: 'Cloyster',
    dexNumber: 91,
    type: 'https://i.imgur.com/V4NtSCe.png?1',
    moveOne: 'Ice Beam',
    moveTwo: 'Toxic Spikes',
    moveThree: 'Icicle Crash',
    moveFour: 'Protect'
})

const gyarados = new Pokemon({
    imgUrl: 'https://i.imgur.com/lyixJyn.png',
    name: 'Gyarados',
    dexNumber: 130,
    type: 'https://i.imgur.com/MsH4uzj.png?1',
    moveOne: 'Surf',
    moveTwo: 'Thrash',
    moveThree: 'Hyper Beam',
    moveFour: 'Crunch'
})

//Blue's johto Pokemon

const sneasel = new Pokemon({
    imgUrl: 'https://i.imgur.com/zMBlUYU.png',
    name: 'Sneasel',
    dexNumber: 215,
    type: 'https://i.imgur.com/vXRVv2h.png?1',
    moveOne: 'Icecicle Crash',
    moveTwo: 'Haze',
    moveThree: 'Shadow Pulse',
    moveFour: 'Thief'
})

const crobat = new Pokemon({
    imgUrl: 'https://i.imgur.com/H81fTim.png',
    name: 'Crobat',
    dexNumber: 169,
    type: 'https://i.imgur.com/yQkDiQw.png?1',
    moveOne: 'Aerial Ace',
    moveTwo: 'Toxic',
    moveThree: 'Crunch',
    moveFour: 'Sludge Bomb'
})

const ursaring = new Pokemon({
    imgUrl: 'https://i.imgur.com/rftWUxb.png',
    name: 'Ursaring',
    dexNumber: 217,
    type: 'https://i.imgur.com/y2yHkrH.png?1',
    moveOne: 'Body Slam',
    moveTwo: 'Rest',
    moveThree: 'Hammer Arm',
    moveFour: 'Strength'
})

const misdreavus = new Pokemon({
    imgUrl: 'https://i.imgur.com/DSKNc6L.png',
    name: 'Misdreavus',
    dexNumber: 200,
    type: 'https://i.imgur.com/v6jCBSN.png?1',
    moveOne: 'Spite',
    moveTwo: 'Curse',
    moveThree: 'Shadow Ball',
    moveFour: 'Payback'
})

const scizor = new Pokemon({
    imgUrl: 'https://i.imgur.com/r47jO3d.png',
    name: 'Scizor',
    dexNumber: 212,
    type: 'https://i.imgur.com/9WjyB4L.png?1',
    moveOne: 'Megahorn',
    moveTwo: 'Steel Claw',
    moveThree: 'Aerial Ace',
    moveFour: 'Steel Defense'
})

const magcargo = new Pokemon({
    imgUrl: 'https://i.imgur.com/kVYhutH.png',
    name: 'Magcargo',
    dexNumber: 219,
    type: 'https://i.imgur.com/FpnxSI9.png?1',
    moveOne: 'Stone Edge',
    moveTwo: 'Fire Blast',
    moveThree: 'Overheat',
    moveFour: 'Sunny Day'
})

const redChampion = new Team({
    imgUrl: 'https://i.imgur.com/yUbhiZs.png?1',
    name: "Champion",
    style: 'Balanced',
    pokemon: [pikachu, charizard, blastoise, venusaur, snorlax, pidgeot]
})

const blueChampion = new Team({
    imgUrl: 'https://i.imgur.com/yUbhiZs.png?1',
    name: "Champion",
    style: 'Offensive',
    pokemon: [alakazam, rhydon, exeggutor, arcanine, cloyster, gyarados]
})

const blueJohto = new Team({
    imgUrl: 'https://i.imgur.com/ZM3u72x.png',
    name: "Johto Team",
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