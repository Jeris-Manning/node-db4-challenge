
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {recipe_id: 1, step_number: 1, instructions: "Combine cinnamon and sugar. Set aside." },
        {recipe_id: 1, step_number: 2, instructions: "Toast bread." },
        {recipe_id: 1, step_number: 3, instructions: "Butter bread" },
        {recipe_id: 1, step_number: 4, instructions: "Sprinkle liberally with cinnamon mixture." }
      ]);
    });
};
