exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', (tbl) => {
      tbl.increments();
      tbl
        .string('recipe_name', 128)
        .unique()
        .notNullable();
    })
    .createTable('ingredients', (tbl) => {
      tbl.increments();
      tbl
        .string('ingredient_name', 128)
        .unique()
        .notNullable();
    })
    .createTable('steps', (tbl) => {
      tbl.increments();
      tbl.integer('step_number').notNullable();
      tbl.string('instructions').notNullable();
      tbl
        .integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes');
    })
    .createTable('recipe_ingredients', (tbl) => {
      tbl.increments();
      tbl.real('quantity').notNullable();
      tbl.string('unit');
      tbl
        .integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredients');
      tbl
        .integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes');
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('recipe_ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes');
};
