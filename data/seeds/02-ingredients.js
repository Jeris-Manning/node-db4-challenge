
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient_name: 'bread'},
        {ingredient_name: 'butter'},
        {ingredient_name: 'cinnamon'},
        {ingredient_name: 'sugar'}
        
      ]);
    });
};
