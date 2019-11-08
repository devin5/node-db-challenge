exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("projects").insert([
        {
          id: 10,
          name: "cut down dead aspen trees",
          description: "the ones along the side of the yard"
        },
        { id: 11, name: "walk dog", description: "go somewhere pretty" },
        {
          id: 13,
          name: "eat lunch",
          description: "make it involve goat cheese and spinach"
        }
      ]);
    });
};

//problem with foreign keys here???
