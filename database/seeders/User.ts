import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/Auth';

export default class UserSeeder extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    await User.createMany([
      {
        username: 'virak kumar',
        email: 'virk@adonisjs.com',
        password: 'secret',
      },
      {
        username: 'romain',
        email: 'romain@adonisjs.com',
        password: 'supersecret'
      }
    ])
  }
}
