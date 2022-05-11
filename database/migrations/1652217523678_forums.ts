import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Forums extends BaseSchema {
  protected tableName = 'forums';

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id');
      table.string("title", 100).notNullable();
      table.string("description", 255).notNullable();
      table.integer("user_id", 180).unsigned().references('id').inTable('users').onDelete('CASCADE');
      table.timestamps(true, true);
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName);
  }
}
