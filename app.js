const express = require('express')

const { getData } = require('./index')

const cors = require('cors')
const app = express()

// Middleware
app.use(express.json())
app.use(cors())

app.get('/', getData) // args are path and function

app.all('*', (req, res, next) => {
  res.status(404).send({ msg: 'Invalid URL' })
})
app.use((err, req, res, next) => {
  if (err.status) {
    res.status(err.status).send({ msg: err.msg })
  } else {
    next(err)
  }
})
app.use((err, req, res, next) => {
  if (err.code === '22P02') {
    res.status(400).send({ msg: 'Bad request' })
  } else {
    next(err)
  }
})
app.use((err, req, res, next) => {
  if (err.code === '23503') {
    res.status(404).send({ msg: 'Unable to find requested' })
  } else {
    next(err)
  }
})
app.use((err, req, res, next) => {
  console.log(err, '<><><>Unhandled Error<><><>')
  res.status(500).send({ msg: 'Internal server error' })
})

module.exports = app
