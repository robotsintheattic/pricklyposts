const express = require('express')
const router = express.Router()
const knex = require('../knex')
// START HERE MONDAY
router.post('/', function(req, res, next) {
  let user = req.body
  console.log('parsed', user)
  knex('users')
    .where('userName', user.userName)
    .then((searchedUser) => {
      if (searchedUser.length > 0) {
        // JWT TOKEN
      } else {
        knex('user')
        .insert(user)
        .then(insertedUser => {
          // JWT
          res.send(insertedUser[0])
        })
      }
    })
})

module.exports = router
