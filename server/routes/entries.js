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

// Getting ALL entries_modules for individual entry (includes the leftJoin to account for the todos TABLE)
router.get('/:id', (req, res, next) => {
  knex('entries')
    .select(['entries_modules.content', 'entries_modules.id as em_id', 'todos.list_item', 'todos.id as todo_id', 'todos.finished as finished', 'modules.id as m_id', 'journals.title as j_title'])
    .join('journals', 'journals.id', 'entries.journal_id')
    .join('entries_modules', 'entries_modules.entry_id', 'entries.id')
    .join('modules', 'modules.id', 'entries_modules.module_id')
    .leftJoin('todos', 'entries_modules.id', 'todos.entries_modules_id')
    .where('entries.id', req.params.id)
    .orderBy('modules.id')
    .orderBy('todos.id')
    .then((modules) => {
      res.send(modules)
    })
    .catch((error) => {
      next(error)
    })
})

/* POST one entry */
router.post('/', (req, res, next) => {
  knex('entries')
    .returning(['id as e_id', 'title', 'journal_id'])
    .insert({
      title: req.body.title,
      journal_id: req.body.journal_id
    })
    .then((entry) => {
      res.send(entry[0])
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
      res.sendStatus(200)
    })
    .catch((error) => {
      next(error)
    })
})

module.exports = router
