/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
});

Route.get('transaction', 'TransactionsController.index')
Route.get('transaction/:id', 'TransactionsController.findone')
Route.post('transaction/:uid', 'TransactionsController.show')
Route.post('transaction', 'TransactionsController.store')
Route.delete('transaction/:id', 'TransactionsController.destroy')
Route.put('transaction/:id', 'TransactionsController.update')
Route.post('invoice/upload', 'InvoicesController.store')
Route.post('invoice/download/:tid', 'InvoicesController.download')
