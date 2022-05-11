import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Posts extends BaseSchema {
  protected tableName = 'posts';

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id");
      table.string("title", 100).notNullable();
      table.string("content", 255).notNullable();
      table.integer("user_id", 180).unsigned().references('id').inTable('users').onDelete('CASCADE');
      table.integer("forum_id").nullable();
      table.timestamps(true, true);
    });
  }

  public async down () {
    this.schema.dropTable(this.tableName);
  }
}
