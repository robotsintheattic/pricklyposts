exports.up = function(knex) {
  return knex.schema.createTable('entries_modules', (table) => {
    table.increments()
    table.integer('entry_id').notNullable().references('entries.id').onDelete('CASCADE')
    table.integer('module_id').notNullable().references('modules.id').onDelete('CASCADE')
    table.string('font', 30).notNullable()
    table.text('content').notNullable()
    table.timestamps(true, true)
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('entries_modules')
}
