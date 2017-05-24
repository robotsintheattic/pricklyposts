
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function() {
      // Inserts seed entries
      return knex('todos').insert([
        {
          id: 1,
          entries_modules_id: 3,
          list_item: 'Edit Resume'
        },
        {
          id: 2,
          entries_modules_id: 3,
          list_item: 'Network with three people'
        },
        {
          id: 3,
          entries_modules_id: 3,
          list_item: 'Research tech companies'
        },
        {
          id: 4,
          entries_modules_id: 7,
          list_item: 'Go Running in AM'
        },
        {
          id: 5,
          entries_modules_id: 7,
          list_item: 'Finish Laundry'
        },
        {
          id: 6,
          entries_modules_id: 7,
          list_item: 'Call Grandma'
        },
        {
          id: 7,
          entries_modules_id: 13,
          list_item: 'Read for 20 minutes'
        },
        {
          id: 8,
          entries_modules_id: 13,
          list_item: 'Get oil and tires rotated'
        },
        {
          id: 9,
          entries_modules_id: 13,
          list_item: 'Call plumber'
        },
        {
          id: 10,
          entries_modules_id: 19,
          list_item: 'Do Laundry'
        },
        {
          id: 11,
          entries_modules_id: 19,
          list_item: 'Eat all 3 meals'
        },
        {
          id: 12,
          entries_modules_id: 19,
          list_item: 'Take a walk'
        },
        {
          id: 13,
          entries_modules_id: 25,
          list_item: 'Buy frozen burritos'
        },
        {
          id: 14,
          entries_modules_id: 25,
          list_item: 'Eat all 3 meals'
        },
        {
          id: 15,
          entries_modules_id: 25,
          list_item: 'Run a half marathon'
        },
        {
          id: 16,
          entries_modules_id: 31,
          list_item: 'Watch Castle'
        },
        {
          id: 17,
          entries_modules_id: 31,
          list_item: 'Brush up on my Derby skills'
        },
        {
          id: 18,
          entries_modules_id: 31,
          list_item: 'Re-dye my hair'
        }
      ])
    }).then(() => {
      return knex.raw('SELECT setval(\'todos_id_seq\', (SELECT MAX(id) FROM todos));')
    })
}
