'use strict'

const { route } = require('@adonisjs/framework/src/Route/Manager')

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('home')
Route.get('/task/list', 'TaskController.index')
Route.get('/task/create','TaskController.create')
Route.post('/task/create','TaskController.store')
Route.get('/task/:id/edit', 'TaskController.edit')
Route.put('/task/:id/edit', 'TaskController.update')
Route.get('/task/:id/details', 'TaskController.details')
Route.get('/task/:id/remove', 'TaskController.remove')
