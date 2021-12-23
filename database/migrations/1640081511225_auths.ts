import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Auths extends BaseSchema {
  protected tableName = 'auths'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments()
      table.string('username', 80).notNullable()
      table.string('email', 254).notNullable().unique()
      table.string('password', 60).notNullable()
      table.timestamps()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
