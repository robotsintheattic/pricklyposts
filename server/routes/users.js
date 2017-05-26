const express = require('express')
const router = express.Router()
const knex = require('../knex')

/* create new user */
router.post('/', function(req, res, next) {
  let user = req.body
  knex('users')
    .where('userName', user.userName)
    .then((searchedUser) => {
      if (searchedUser.length > 0) {
        res.send([searchedUser[0].fullName, searchedUser[0].profilePicture, searchedUser[0].id])
      } else {
        knex('users')
        .insert(user)
        .then(insertedUser => {
          res.send(insertedUser[0].fullName)
        })
      }
    })
})

module.exports = router
