exports.up = function(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments()
    table.string('fullName').notNullable()
    table.string('userName').unique().notNullable()
    table.string('profilePicture').notNullable()
    table.string('instagramId').notNullable()
    table.timestamps(true, true)
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('users')
}
