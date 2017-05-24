'use strict'

const express = require('express')
const path = require('path')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')

const index = require('./routes/index')
const users = require('./routes/users')
const entries = require('./routes/entries')
const entries_modules = require('./routes/entries_modules')
const journals = require('./routes/journals')

const app = express()

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(cookieParser())

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
}
app.use(express.static(path.join(__dirname, '../client')))
app.use(express.static(path.join(__dirname, '/../', 'node_modules')))

app.use('/', index)
app.use('/api/users', users)
app.use('/api/entries', entries)
app.use('/api/entries_modules', entries_modules)
app.use('/api/journals', journals)

app.use('*', function(req, res, next) {
  res.sendFile('index.html', { root: path.join(__dirname, '../client') })
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  let err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development'
    ? err
    : {}

  // render the error page
  res.status(err.status || 500)
  res.send(err)
})

module.exports = app
