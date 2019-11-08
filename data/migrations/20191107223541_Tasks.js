exports.up = function(knex) {
    return knex.schema.createTable("tasks", tbl => {
        tbl.increments();
        tbl.integer("project_id", 5)
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("projects");
        tbl.text("task_description", 500)
          .notNullable()
          .unique();
        tbl.text("notes", 500);
        tbl.boolean("completed").defaultTo("false");
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("tasks")  
};