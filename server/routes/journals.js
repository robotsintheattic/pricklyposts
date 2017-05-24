const express = require('express')
const router = express.Router()
const knex = require('../knex')

/* GET all journals */
router.get('/', function(req, res, next) {
  knex('journals')
    .orderBy('created_at', 'asc')
    .then((journals) => {
      res.send(journals)
    })
})

router.get('/users/:id', function(req, res, next) {
  let user_id = req.params.id
  knex('journals')
    .select(['journals.id as j_id', 'entries.id as e_id', 'journals.title as j_title'])
    .join('entries', 'entries.journal_id', 'journals.id')
    .where('user_id', user_id)
    .orderBy('entries.id', 'desc')
    .then((journals) => {
      res.send(journals)
    })
})

router.get('/:id', function(req, res, next) {
  let journal_id = req.params.id
  console.log('here', journal_id)
  knex('journals')
    .select('entries.id as id')
    .join('entries', 'entries.journal_id', 'journals.id')
    .where('journal_id', journal_id)
    .orderBy('entries.id', 'desc')
    .then((journals) => {
      res.send(journals)
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
