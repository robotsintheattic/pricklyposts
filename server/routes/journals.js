const express = require('express')
const router = express.Router()
const knex = require('../knex')

/* GET all journals */
router.get('/', function(req, res, next) {
  knex('journals')
    .orderBy('created_at', 'asc')
    .then((journals) => {
      console.log('journals', journals)
      res.send(journals)
    })
})

router.get('/users/:id', function(req, res, next) {
  let user_id = req.params.id
  knex('journals')
    .where('user_id', user_id)
    .orderBy('created_at', 'asc')
    .then((journals) => {
      console.log('journals', journals)
      res.send(journals)
    })
})

/* GET one journal */
router.get('/:id', function(req, res, next) {
  let id = req.params.id

  knex('journals')
    .where('id', id)
    .then((journal) => {
      res.send(journal)
    })
})

/* POST one journal */
router.post('/', function(req, res, next) {
  knex('journals')
    .returning(['id', 'title', 'user_id'])
    .insert({
      title: req.body.title,
      user_id: req.body.user_id
    })
    .then((journal) => {
      res.send(journal)
    })
})

/* UPDATE one journal */
router.patch('/:id', function(req, res, next) {
  knex('journals')
    .returning(['id', 'title', 'user_id'])
    .where('id', req.params.id)
    .update({
      title: req.body.title
    })
    .then((journal) => {
      res.send(journal)
    })
})

/* DELETE one journal */
router.delete('/:id', function(req, res, next) {
  knex('journals')
    .where('id', req.params.id)
    .del()
    .then((journal) => {
      res.send(journal)
    })
})

module.exports = router
