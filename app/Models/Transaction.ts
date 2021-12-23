import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import {
  hasOne,
  HasOne,
  // hasMany,
  // HasMany
} from '@ioc:Adonis/Lucid/Orm';
import Invoice from 'App/Models/Invoice';

export default class Transaction extends BaseModel {
  
  @hasOne(() => Invoice)
  public invoice: HasOne<typeof Invoice>

  @column({ isPrimary: true })
  public id: number

  @column()
  public customerName: string

  @column()
  public amount: number

  @column()
  public description: string

  @column()
  public type: string

  @column()
  user_id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
