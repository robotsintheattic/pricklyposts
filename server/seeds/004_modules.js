
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('modules').del()
    .then(function() {
      // Inserts seed entries
      return knex('modules').insert([
        {
          id: 1,
          type: '<Heading />'
        },
        {
          id: 2,
          type: '<Mood />'
        },
        {
          id: 3,
          type: '<Textfield />'
        },
        {
          id: 4,
          type: '<Pic />'
        },
        {
          id: 5,
          type: '<Blockquote />'
        },
        {
          id: 6,
          type: '<Todo />'
        }
      ])
    })
}
