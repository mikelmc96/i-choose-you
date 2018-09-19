require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/project-two', { useNewUrlParser: true })
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })