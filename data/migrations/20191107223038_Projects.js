exports.up = function(knex) {
    return knex.schema.createTable("projects", tbl => {
        tbl.increments();
        tbl.string("name", 150);
        tbl.text("description", 500)
          .notNullable();
        tbl.boolean("completed")
          .notNullable().defaultTo(false);
    }).createTable("resources", tbl => {
        tbl.increments();
        tbl.string("name", 150)
          .notNullable();
        tbl.text("description", 500)
          .notNullable();
    }).createTable("projects_resources", tbl => {
        tbl.increments();
        tbl.integer("project_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("projects")
        tbl.integer("resource_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("resources")
  
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists("projects")
      .dropTableIfExists("resources")
      .dropTableIfExists("projects_resources");
  };