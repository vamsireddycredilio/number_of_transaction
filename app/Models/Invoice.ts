import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Invoice extends BaseModel {


  @column({ isPrimary: true })
  public id: number

  @column()
  public invoiceName: string

  @column()
  public user_id: number

  @column()
  public transac_id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
