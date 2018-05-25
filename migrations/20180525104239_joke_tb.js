
exports.up = function(knex, Promise) {
  return knex.schema.createTable('joke_tb', table => {
      table.increments()
      table.integer('categoryId').notNullable()
      table.text('joke').notNullable()
      table.integer('votes')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('joke_tb')
};
