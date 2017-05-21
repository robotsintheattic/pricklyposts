exports.up = function(knex) {
  return knex.schema.createTable('journals', (table) => {
    table.increments()
    table.string('title', 30).notNullable()
    table.integer('user_id').notNullable().references('users.id').onDelete('CASCADE')
    table.timestamps(true, true)
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('journals')
}
