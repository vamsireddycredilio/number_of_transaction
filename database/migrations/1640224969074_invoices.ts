import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Invoices extends BaseSchema {
  protected tableName = 'invoices'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('invoiceName').notNullable()
      table.timestamps(true)
      table
        .integer('user_id')
        .unsigned()
        .references('auths.id')
        .onDelete('CASCADE')
        table
        .integer('transac_id')
        .unsigned()
        .references('transactions.id')
        .onDelete('CASCADE')
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
