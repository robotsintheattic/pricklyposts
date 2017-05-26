
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('journals').del()
    .then(function() {
      // Inserts seed entries
      return knex('journals').insert([
        {
          id: 1,
          title: 'Future Log',
          user_id: 1
        },
        {
          id: 2,
          title: 'Thoughts',
          user_id: 1
        },
        {
          id: 3,
          title: 'Hopes & Dreams',
          user_id: 1
        },
        {
          id: 4,
          title: 'Daily Dash',
          user_id: 1
        },
        {
          id: 5,
          title: 'May 2017',
          user_id: 1
        },
        {
          id: 6,
          title: 'Hopes & Dreams',
          user_id: 2
        }
      ])
    }).then(() => {
      return knex.raw('SELECT setval(\'journals_id_seq\', (SELECT MAX(id) FROM journals));')
    })
}
