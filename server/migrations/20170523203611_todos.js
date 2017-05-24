exports.up = function(knex) {
  return knex.schema.createTable('todos', (table) => {
    table.increments()
    table.integer('entries_modules_id').notNullable().references('entries_modules.id').onDelete('CASCADE')
    table.text('list_item').notNullable()
    table.timestamps(true, true)
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('todos')
}
