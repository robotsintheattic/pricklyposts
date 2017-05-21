exports.up = function(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments()
    table.string('name', 15).notNullable()
    table.string('username', 36).unique().notNullable()
    table.text('token').notNullable()
    table.timestamps(true, true)
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('users')
}
