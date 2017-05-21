exports.up = function(knex) {
  return knex.schema.createTable('entries', (table) => {
    table.increments()
    table.string('title', 30).notNullable()
    table.integer('journal_id').notNullable().references('journals.id').onDelete('CASCADE')
    table.timestamps(true, true)
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('entries')
}
