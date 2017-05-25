const express = require('express')
const router = express.Router()
const knex = require('../knex')

/* GET all entires_modules */
router.get('/', (req, res, next) => {
  knex('entries_modules')
    .then((options) => {
      res.send(options)
    })
    .catch((error) => {
      next(error)
    })
})

router.get('/entries/:id', (req, res, next) => {
  console.log('here', req.params.id);
  knex('entries_modules')
    .where('entry_id', req.params.id)
    .then((modules) => {
      console.log(modules);
      res.send(modules[0])
    })
    .catch((error) => {
      next(error)
    })
})

/* GET one option */
router.get('/:id', (req, res, next) => {
  const id = req.params.id

  knex('entries_modules')
    .then((option) => {
      res.send(option)
    })
    .catch((error) => {
      next(error)
    })
})
// Post todo items
router.post('/todos', (req, res, next) => {
  knex('todos')
    .returning(['id'])
    .insert(req.body)
    .then((todo) => {
      res.send(todo)
    })
})

/* POST one option */
router.post('/:id', (req, res, next) => {
  let entryId = +req.params.id
  knex('entries_modules')
    .returning(['id', 'entry_id', 'module_id', 'content'])
    .insert({
      entry_id: entryId,
      module_id: req.body.module_id,
      content: req.body.content
    })
    .then((option) => {
      res.send(option)
    })
    .catch((error) => {
      next(error)
    })
})

router.patch('/todos/:id', (req, res, next) => {
  const id = req.params.id
  console.log('in patch', req.body, id)
  knex('todos')
    .returning('id')
    .where('id', id)
    .update(req.body)
    .then((entry_mod) => {
      console.log('here', entry_mod)
      res.send(entry_mod)
    })
    .catch((error) => {
      next(error)
    })
})

/* UPDATE one option */
router.patch('/:id', (req, res, next) => {
  const id = req.params.id
  console.log('in patch', req.body, id)
  knex('entries_modules')
    .returning(['id', 'content'])
    .where('id', id)
    .update(req.body)
    .then((entry_mod) => {
      console.log(entry_mod)
      res.send(entry_mod)
    })
    .catch((error) => {
      next(error)
    })
})

/* DELETE one option */
router.delete('/:id', (req, res, next) => {
  const id = req.params.id

  knex('entries_modules')
    .where('id', id)
    .del()
    .then((option) => {
      res.send(option)
    })
    .catch((error) => {
      next(error)
    })
})

module.exports = router
