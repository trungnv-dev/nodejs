import express from 'express'
import bodyParser from 'body-parser'
import configViewEngine from './configs/viewEngine.js'
import initWebRoute from './route/web.js'
import './configs/connectDB.js'
import 'dotenv/config'
// require('dotenv').config()

const app = express()
const port = process.env.PORT || 8080;

// support send data from client to server
app.use(bodyParser.urlencoded({ extended: false })) // parse application/x-www-form-urlencoded
app.use(bodyParser.json()) // parse application/json

// setup view engine
configViewEngine(app)

// setup router
initWebRoute(app)

app.listen(port)