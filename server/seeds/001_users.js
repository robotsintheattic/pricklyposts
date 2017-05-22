
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1,
          fullName: 'Emily Ringoen',
          userName: 'emilyringoen',
          profilePicture: 'https://scontent.cdninstagram.com/t51.2885-19/11191102_1653303844898676_1806647406_a.jpg',
          instagramId: '1910037648'
        },
        { id: 2,
          fullName: 'Jen',
          userName: 'jeniwiner',
          profilePicture: 'https://scontent.cdninstagram.com/t51.2885-19/s150x150/16583766_1858397181085712_892211088454582272_a.jpg',
          instagramId: '228103613'
        }
      ])
    }).then(() => {
      return knex.raw('SELECT setval(\'users_id_seq\', (SELECT MAX(id) FROM users));')
    })
}
