const express = require('express')
const router = express.Router()
const knex = require('../knex')

/* GET all modules */
router.get('/modules', function(req, res, next) {
  knex('modules')
    .then((modules) => {
      res.send(modules)
    })
    .catch((error) => {
      console.log(error)
      next(error)
    })
})

/* GET one module */
router.get('/modules/:id', function(req, res, next) {
  knex('modules')
    .where('id', req.params.id)
    .then((modules) => {
      res.send(modules)
    })
    .catch((error) => {
      console.log(error)
      next(error)
    })
})

/* POST one module */
router.post('/modules', function(req, res, next) {
  knex('modules')
    .returning(['id', 'type', 'title'])
    .insert({
      type: req.body.type
    })
    .then((modules) => {
      res.send(modules)
    })
    .catch((error) => {
      console.log(error)
      next(error)
    })
})

/* UPDATE one module */
router.patch('/modules/:id', function(req, res, next) {
  knex('modules')
  .udpate({
    type: req.body.type
  })
  .then((modules) => {
    res.send(modules)
  })
  .catch((error) => {
    console.log(error)
    next(error)
  })
})

/* DELETE one module */
router.delete('modules/:id', function(req, res, next) {
  knex('modules')
  .where('id', req.params.id)
  .del()
  .then((modules) => {
    res.send(modules)
  })
  .catch((error) => {
    console.log(error)
    next(error)
  })
})

module.exports = router
