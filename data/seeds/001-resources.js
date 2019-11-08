exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("resources")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("resources").insert([
        { id: 1, name: "junk food", description: "solves all problems" },
        { id: 2, name: "cool dog", description: "lowers blood pressure" },
        {
          id: 3,
          name: "my dad",
          description: "solves all problems junk food can't"
        }
      ]);
    });
};
