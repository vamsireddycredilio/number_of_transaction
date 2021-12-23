import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Transactions extends BaseSchema {
  protected tableName = 'transactions'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('customerName', 80).notNullable()
      table.float('amount').notNullable()
      table.string('description', 500).notNullable()
      table.string('type', 5).notNullable()
      table.timestamps(true)
      table
        .integer('user_id')
        .unsigned()
        .references('auths.id')
        .onDelete('CASCADE')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
