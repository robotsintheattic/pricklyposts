const express = require('express')
const router = express.Router()
const knex = require('../knex')

/* GET all entries */
router.get('/', (req, res, next) => {
  knex('entries')
    .then((entries) => {
      res.send(entries)
    })
    .catch((error) => {
      next(error)
    })
})
router.get('/:id', (req, res, next) => {
  knex('entries')
    .select(['entries.id as e_id', 'entries_modules.content', 'entries_modules.font', 'modules.id as m_id', 'modules.type', 'entries.title'])
    .join('entries_modules', 'entries_modules.entry_id', 'entries.id')
    .join('modules', 'modules.id', 'entries_modules.module_id')
    .where('entries.id', req.params.id)
    .then((modules) => {
      console.log('get', modules)
      res.send(modules)
    })
    .catch((error) => {
      next(error)
    })
})

/* POST one entry */
router.post('/', (req, res, next) => {
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
router.patch('/:id', (req, res, next) => {
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
router.delete('/:id', (req, res, next) => {
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
