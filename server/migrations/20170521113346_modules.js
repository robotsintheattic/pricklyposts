exports.up = function(knex) {
  return knex.schema.createTable('modules', (table) => {
    table.increments()
    table.string('type', 30).notNullable()
    table.timestamps(true, true)
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('modules')
}
