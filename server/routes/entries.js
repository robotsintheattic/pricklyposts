const express = require('express')
const router = express.Router()
const knex = require('../knex')

/* GET all entries */
router.get('/entries', (req, res, next) => {
  knex('entries')
    .then((entries) => {
      res.send(entries)
    })
    .catch((error) => {
      next(error)
    })
})

/* POST one entry */
router.post('/entries', (req, res, next) => {
  knex('entries')
    .returning(['id', 'title', 'journal_id'])
    .insert({
      title: req.body.title,
      journal_id: req.body.journal_id
    })
    .then((entry) => {
      res.send(entry)
    })
    .catch((error) => {
      next(error)
    })
})

/* UPDATE one entry */
router.patch('/entries/:id', (req, res, next) => {
  const id = req.params.id

  knex('entries')
    .returning(['id', 'title', 'journal_id'])
    .where('id', id)
    .update({
      title: req.body.title,
      journal_id: req.body.journal_id
    })
    .then((entry) => {
      res.send(entry)
    })
    .catch((error) => {
      next(error)
    })
})

/* DELETE one entry */
router.delete('/entries/:id', (req, res, next) => {
  const id = req.params.id

  knex('entries')
    .where('id', id)
    .del()
    .then((entry) => {
      res.send(entry)
    })
    .catch((error) => {
      next(error)
    })
})

module.exports = router
