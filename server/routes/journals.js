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
router.POST

module.exports = router
