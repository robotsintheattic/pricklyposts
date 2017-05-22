const express = require('express')
const router = express.Router()
const knex = require('../knex')

// START HERE MONDAY
router.post('/', function(req, res, next) {
  let user = req.body
  knex('users')
    .where('userName', user.userName)
    .then((searchedUser) => {
      if (searchedUser.length > 0) {
        // JWT
        res.send([searchedUser[0].fullName, searchedUser[0].profilePicture])
      } else {
        knex('users')
        .insert(user)
        .then(insertedUser => {
          // JWT
          res.send(insertedUser[0].fullName)
        })
      }
    })
})

module.exports = router
