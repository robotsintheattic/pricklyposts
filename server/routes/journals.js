const express = require('express')
const router = express.Router()
const knex = require('../knex')

/* GET all journals */
router.get('/journals', function(req, res, next) {
  knex('journals')
    .orderBy('created_at', 'asc')
    .then((journals) => {
      res.send(journals)
    })
    .catch((error) => {
      console.log(error)
      next(error)
    })
})

/* GET one journal */
router.get('/journals/:id', function(req, res, next) {
  let id = req.params.id

  knex('journals')
    .where('id', id)
    .then((journal) => {
      res.send(journal)
    })
    .catch((error) => {
      console.log(error)
      next(error)
    })
})

/* POST one journal */
router.post('/journals', function(req, res, next) {
  knex('journals')
    .returning(['id', 'title', 'user_id'])
    .insert({
      title: req.body.title,
      user_id: req.body.user_id
    })
    .then((journal) => {
      res.send(journal)
    })
    .catch((error) => {
      console.log(error)
      next(error)
    })
})

/* UPDATE one journal */
router.patch('/journals/:id', function(req, res, next) {
  knex('journals')
    .returning(['id', 'title', 'user_id'])
    .where('id', req.params.id)
    .update({
      title: req.body.title
    })
    .then((journal) => {
      res.send(journal)
    })
    .catch((error) => {
      console.log(error)
      next(error)
    })
})

/* DELETE one journal */
router.delete('/journals/:id', function(req, res, next) {
  knex('journals')
    .where('id', req.params.id)
    .del()
    .then((journal) => {
      res.send(journal)
    })
    .catch((error) => {
      console.log(error)
      next(error)
    })
})

module.exports = router
