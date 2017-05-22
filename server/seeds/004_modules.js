
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('modules').del()
    .then(function() {
      // Inserts seed entries
      return knex('modules').insert([
        {
          id: 1,
          type: '<ToDo />'
        },
        {
          id: 2,
          type: '<BlockQuote />'
        },
        {
          id: 3,
          type: '<Heading />'
        },
        {
          id: 4,
          type: '<Mood />'
        },
        {
          id: 5,
          type: '<Pic />'
        },
        {
          id: 6,
          type: '<Textfield />'
        }
      ])
    })
}
