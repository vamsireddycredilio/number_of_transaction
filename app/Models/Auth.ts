import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import Transaction from 'App/Models/Transaction';
import Invoice from 'App/Models/Invoice';
import {
  // hasOne,
  // HasOne,
  hasMany,
  HasMany
} from '@ioc:Adonis/Lucid/Orm';

export default class Auth extends BaseModel {

  // @hasOne(() => Transaction)
  // public transaction: HasOne<typeof Transaction>

  @hasMany(() => Transaction)
  public transaction: HasMany<typeof Transaction>

  @hasMany(() => Invoice)
  public invoice: HasMany<typeof Invoice>

  @column({ isPrimary: true })
  public id: number

  @column()
  public username: string

  @column()
  public email: string

  @column()
  public password: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
