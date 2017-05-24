
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('entries').del()
    .then(function() {
      // Inserts seed entries
      return knex('entries').insert([
        {
          id: 1,
          title: 'May 20th',
          journal_id: 1
        },
        {
          id: 2,
          title: 'Making Plans',
          journal_id: 2
        },
        {
          id: 3,
          title: 'Job Board',
          journal_id: 3
        },
        {
          id: 4,
          title: 'May 22nd, 2017',
          journal_id: 4
        },
        {
          id: 5,
          title: 'May 23rd',
          journal_id: 1
        },
        {
          id: 6,
          title: 'May 24rd',
          journal_id: 1
        }
      ])
    }).then(() => {
      return knex.raw('SELECT setval(\'entries_id_seq\', (SELECT MAX(id) FROM entries));')
    })
}
